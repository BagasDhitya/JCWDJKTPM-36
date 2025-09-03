// Controller -> menghubungkan request (dari router) dengan service
// bertugas parsing request, memanggil service, dan mengirim response

import { Request, Response } from "express";
import { ProductService } from "../services/product.service";
import { ProductDTO } from "../dto/product.dto";

export class ProductController {
    private productService: ProductService

    constructor() {
        this.productService = new ProductService()

        // kita daftarkan masing masing fitur
        this.getAll = this.getAll.bind(this)
        this.getById = this.getById.bind(this)
        this.create = this.create.bind(this)
        this.update = this.update.bind(this)
        this.delete = this.delete.bind(this)
    }

    public create(req: Request, res: Response) {
        try {
            const { title, image, price, stock }: Partial<ProductDTO> = req.body

            // validasi body request sebelum dikirim ke service
            if (!title || !image || !price || !stock) {
                return res.status(400).send({
                    message: 'Missing required fields. Please check again'
                })
            }

            // masukkan body request ke service
            const newProduct = this.productService.create({ title, image, price, stock })
            res.status(201).send({
                message: 'success',
                data: newProduct
            })
        } catch (error) {
            res.status(500).send({
                message: 'failure',
                detail: 'Internal server error'
            })
        }
    }

    public update(req: Request, res: Response) {
        try {
            const { id } = req.params
            const { title, image, price, stock }: Partial<ProductDTO> = req.body

            const updatedProduct = this.productService.update(Number(id), { title, image, price, stock })

            // validasi jika id product tidak ditemukan, dan data tidak bisa diupdate
            if (!updatedProduct) {
                res.status(404).send({ message: 'Product not found' })
            }

            res.status(200).send({
                message: 'success',
                detail: 'Successfully update product'
            })
        } catch (error) {
            res.status(500).send({
                message: 'failure',
                detail: 'Internal server error'
            })
        }
    }

    public delete(req: Request, res: Response) {
        try {
            const { id } = req.params
            this.productService.delete(Number(id))

            res.status(200).send({
                message: 'success',
                detail: 'Successfully delete product'
            })
        } catch (error) {
            res.status(500).send({
                message: 'failure',
                detail: 'Internal server error'
            })
        }
    }

    public getAll(req: Request, res: Response) {
        try {

            const { search, sort, category } = req.query // ambil query

            const response = this.productService.getAll({
                search: search as string, // search berdasarkan nama produk
                sort: sort as 'asc' | 'desc', // sort berdasarkan harga produk
                category: category as string // filter berdasarkan kategori produk
            })

            res.status(200).send({
                message: 'success',
                data: response
            })

        } catch (error) {
            res.status(500).send({
                message: 'failure',
                detail: 'Internal server error'
            })
        }
    }

    public getById(req: Request, res: Response) {
        try {
            const { id } = req.params
            const product = this.productService.getById(Number(id))

            // jika product tidak ditemukan
            if (!product) {
                return res.status(404).send({ message: 'Product not found' })
            }

            res.status(200).send({
                message: 'success',
                data: product
            })
        } catch (error) {
            res.status(500).send({
                message: 'failure',
                detail: 'Internal server error'
            })
        }
    }
}

