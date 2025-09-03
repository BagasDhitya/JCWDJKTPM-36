import express, { Application, Request, Response } from 'express'
import ProductRouter from './routers/product.router'

import { apiLogger } from './helpers/logging.helpers'

class App {
    private app: Application // instance utama dari express
    private port: number // port server

    constructor(port: number) {
        this.app = express() // inisialisasi express
        this.port = port // set port server

        this.middlewares() // aktifkan middleware sebelum API membaca route
        this.routes() // panggil method routes() untuk mendaftarkan route nya
    }

    // method untuk mendaftarkan middleware global
    private middlewares(): void {
        this.app.use(express.json()) // supaya bisa parsing JSONs
        this.app.use(apiLogger)
    }

    // method untuk mendaftarkan semua route endpoint
    private routes(): void {
        // route dummy
        this.app.get('/', (req: Request, res: Response) => {
            res.status(200).send({ message: 'Hello World' })
        })

        this.app.use('/api', ProductRouter)
    }

    // method untuk menjalankan server
    public listen(): void {
        this.app.listen(this.port, () => {
            console.log(`Server running at http://localhost:${this.port}`)
        })
    }
}

const server = new App(8000) // buat instance dari class App dengan port 8000
server.listen() // jalankan server