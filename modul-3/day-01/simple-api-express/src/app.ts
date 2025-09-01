import express, { Application, Request, Response } from 'express'
import product from './database/products.json'

import fs from 'fs'
import path from 'path'

interface IProduct {
    id?: string,
    title: string,
    image: string,
    price: number
}

const app: Application = express()
const PORT: number = 8000

app.use(express.json()) // -> supaya express bisa membaca response json

// membaca lokasi file json
const dataFile = path.join(__dirname, './database/products.json')

// fungsi untuk membaca file JSON
function readProducts(): IProduct[] {
    if (!fs.existsSync(dataFile)) { // untuk cek apakah data json sebelumnya udah ada
        return []
    }
    const data = fs.readFileSync(dataFile, 'utf-8')
    return JSON.parse(data || '[]')
}

// fungsi tulis ke file JSON
function writeProducts(product: IProduct[]) {
    fs.writeFileSync(dataFile, JSON.stringify(product, null, 2))
}

// fungsi untuk generate id otomatis
function generateId(product: IProduct[]): string {
    if (product.length === 0) {
        return 'p001'
    }
    const lastId = product[product.length - 1].id // untuk membaca id terakhir, contoh -> p005
    const lastNumber = parseInt(lastId!.replace('p', ''), 10) // ambil angka -> 5
    const newNumber = lastNumber + 1

    return 'p' + newNumber.toString().padStart(3, '0') // jadi p006
}

app.get('/', (req: Request, res: Response) => {
    res.status(200).send({
        message: 'success',
        content: 'Hello World from Express.js'
    })
})

// get all product -> mengambil semua produk
app.get('/products', (req: Request, res: Response) => {
    res.status(200).send({
        message: 'success',
        data: product
    })
})

// get by id product -> mengambil produk tertentu
app.get('/products/:id', (req: Request, res: Response) => {
    const { id } = req.params // untuk membaca params/parameter dari URL

    // cocokkan id dari params, dengan id dari produk yang ada di database
    const specifyData = product.find((item: IProduct) => item.id === id)

    // jika data ditemukan, langsung lempar response
    if (specifyData) {
        res.status(200).send({
            message: 'success',
            data: specifyData
        })
    } else { // jika data tidak ditemukan, lempar respon 404 not found
        res.status(404).send({
            message: 'data not found'
        })
    }
})

// post product -> membuat produk baru
app.post('/products', (req: Request, res: Response) => {
    const products = readProducts()
    const { title, image, price }: IProduct = req.body // menentukan data apa yang mau dibuat dengan request body

    // validasi supaya request body tetap lengkap
    if (!title || !image || !price) {
        return res.status(400).send({ message: 'All product fields are required' })
    }

    // buat objek untuk data baru
    const product: IProduct = {
        id: generateId(products),
        title: title,
        image: image,
        price: price
    }

    // masukkan data body request ke products untuk dibaca
    products.push(product)

    // tulis perubahan ke file json
    writeProducts(products)

    res.status(201).json({
        message: 'Product added successfully',
        data: product
    })
})

app.listen(PORT, () => {
    console.log(`Express server running at http://localhost:${PORT}`)
})