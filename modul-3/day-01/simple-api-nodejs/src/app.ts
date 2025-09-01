import { createServer, IncomingMessage, ServerResponse } from 'http'
import product from './database/products.json'

const PORT = 8000

interface IResponse {
    message: string,
    author: string,
    time: string
}

interface IProduct {
    id: string,
    title: string,
    image: string,
    price: number
}

function requestHandler(req: IncomingMessage, res: ServerResponse) {
    // tempat untuk menaruh logic API
    // seperti GET, POST, PUT, dan DELETE
    // selain logic, disini juga untuk menentukan endpoint URL

    // konten yang dihasilkan berupa plain text
    if (req.method === 'GET' && req.url === '/') { // GET -> http request, '/' -> endpoint
        res.statusCode = 200 // status 200 -> success
        res.setHeader('Content-Type', 'text/plain;charset=utf-8') // header -> menentukan jenis konten response
        res.end("Hello World") // konten
        return
    }

    // konten yang dihasilkan berupa data JSON
    if (req.method === 'GET' && req.url === '/hello-json') {
        res.statusCode = 200
        res.setHeader('Content-Type', 'application/json') // setup konten yang dihasilkan adalah JSON

        // buat data Object
        const data: IResponse = {
            message: 'Hello World',
            author: 'John Doe',
            time: new Date().toLocaleString()
        }

        // parsing ke dalam bentuk string supaya bisa dibaca
        res.end(JSON.stringify(data))
    }

    // konten untuk menampilkan produk
    if (req.method === 'GET' && req.url === '/products') {
        res.statusCode = 200
        res.setHeader('Content-Type', 'application/json')

        const data: IProduct[] = product // simulasikan ini adalah ngambil dari database

        res.end(JSON.stringify(data))
    }

    // ERROR : digunakan ketika ada url yang direquest oleh user, tetapi tidak terdaftar di aplikasi kita
    res.statusCode = 404
    res.setHeader('Content-Type', 'application/json')
    res.end(JSON.stringify({ message: 'not found' }))
}

const server = createServer(requestHandler)

server.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`)
})