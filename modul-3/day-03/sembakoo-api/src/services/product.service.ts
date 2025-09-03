// Services -> berisi logic utama aplikasi (business logic)
// example : bikin produk baru, edit produk, hapus produk
// tidak peduli bagaimana request datang, di layer ini hanya fokus ke proses data

import { ProductDTO } from "../dto/product.dto";
import data from '../database/products.json'

import fs from 'fs'
import path from 'path'

export class ProductService {
    private products: ProductDTO[] = data // data dari database dummy products.json
    private filePath: string = path.join(__dirname, '../database/products.json')

    // load data dari file JSON
    public loadProducts(): ProductDTO[] {
        if (!fs.existsSync(this.filePath)) { // untuk cek apakah data json sebelumnya udah ada
            return []
        }
        const data = fs.readFileSync(this.filePath, 'utf-8')
        return JSON.parse(data || '[]')
    }

    // simpan data ke file JSON
    public saveProducts(products: ProductDTO[]): void {
        fs.writeFileSync(this.filePath, JSON.stringify(products, null, 2))
    }

    // tambah produk baru
    public create(product: Omit<ProductDTO, 'id'>) {
        const products = this.loadProducts() // membaca produk dari JSON file

        // membuat objek data yang akan dikirim ke database
        const newProduct: ProductDTO = {
            id: products.length ? products[products.length - 1].id + 1 : 1,
            ...product
        }

        products.push(newProduct) // simpan objek data ke dalam database
        this.saveProducts(products) // membaca data baru yang sudah dicreate
        return newProduct
    }

    // update produk lama
    public update(id: number, updated: Partial<ProductDTO>): ProductDTO | null {
        const products = this.loadProducts()

        const index = products.findIndex((p) => p.id === id) // cocokkan id dengan yang ada di database

        // validasi id
        if (index === -1) {
            return null
        }

        products[index] = { ...products[index], ...updated } // update data, tukar data lama dengan hasil update
        this.saveProducts(products) // membaca data baru yang sudah diupdate
        return products[index]
    }

    // delete produk yang diinginkan
    public delete(id: number): boolean | null {
        const products = this.loadProducts()

        const index = products.findIndex((p) => p.id === id) // cocokkan id dengan yang ada di database

        // validasi id
        if (index === -1) {
            return null
        }

        // cara 1 untuk remove : pakai splice
        products.splice(index, 1) // untuk menghapus element yang dituju

        // cara 2 untuk remove : pakai for loop
        // bikin array baru manual tanpa product dengan id yang dicari

        // const newProduct: ProductDTO[] = []
        // let found: boolean = false // berikan flagging untuk menandai id jika ketemu

        // for (let i = 0; i < products.length; i++) {
        //     if (products[i].id === id) {
        //         found = true // tandai jika ketemu
        //         continue // skip produk yang mau dihapus
        //     }
        //     newProduct[newProduct.length] = products[i] // push manual
        // }

        // if (!found) {
        //     return false // kalau id tidak ditemukan
        // }

        this.saveProducts(products) // membaca data baru yang sudah dihapus
        return true
    }

    public getAll(): ProductDTO[] {
        return this.products
    }

    public getById(id: number): ProductDTO | undefined {
        return this.products.find((p) => p.id === id)
    }
}