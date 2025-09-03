// Controller -> menghubungkan request (dari router) dengan service
// bertugas parsing request, memanggil service, dan mengirim response

import { Request, Response, NextFunction } from "express";
import { ProductService } from "../services/product.service";
import { ProductDTO } from "../dto/product.dto";
import { AppError } from "../helpers/globalError.helpers";

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

    public create(req: Request, res: Response, next: NextFunction) {
        const { title, image, price, stock }: Partial<ProductDTO> = req.body
        // validasi body request sebelum dikirim ke service
        if (!title || !image || !price || !stock) {
            return next(new AppError('Missing required fields', 400))
        }

        // masukkan body request ke service
        const newProduct = this.productService.create({ title, image, price, stock })
        res.status(201).send({
            message: 'success',
            data: newProduct
        })
    }

    public update(req: Request, res: Response, next: NextFunction) {

        const { id } = req.params
        const { title, image, price, stock }: Partial<ProductDTO> = req.body

        const updatedProduct = this.productService.update(Number(id), { title, image, price, stock })

        // validasi jika id product tidak ditemukan, dan data tidak bisa diupdate
        if (!updatedProduct) {
            return next(new AppError('Product not found', 404))
        }

        res.status(200).send({
            message: 'success',
            detail: 'Successfully update product'
        })
    }

    public delete(req: Request, res: Response, next: NextFunction) {
        const { id } = req.params

        if (!id) {
            return next(new AppError('Product not found', 404))
        }

        this.productService.delete(Number(id))
        res.status(200).send({
            message: 'success',
            detail: 'Successfully delete product'
        })
    }

    public getAll(req: Request, res: Response, next: NextFunction) {
        const { search, sort, category, page, limit } = req.query // ambil query

        const response = this.productService.getAll({
            search: search as string, // search berdasarkan nama produk
            sort: sort as 'asc' | 'desc', // sort berdasarkan harga produk
            category: category as string, // filter berdasarkan kategori produk
            page: page ? Number(page) : undefined, // untuk menampilkan setiap page
            limit: limit ? Number(limit) : undefined
        })

        if (response.data.length <= 0) {
            return next(new AppError('No data available', 404))
        }

        res.status(200).send({
            message: 'success',
            data: response
        })
    }

    public getById(req: Request, res: Response, next: NextFunction) {
        const { id } = req.params
        const product = this.productService.getById(Number(id))

        // jika product tidak ditemukan
        if (!product) {
            return next(new AppError('Product not found', 404))
        }

        res.status(200).send({
            message: 'success',
            data: product
        })
    }
}

