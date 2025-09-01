import express, { Application, Request, Response } from 'express'
import product from './database/products.json'

const app: Application = express()
const PORT: number = 8000

app.use(express.json()) // -> supaya express bisa membaca response json

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
    const specifyData = product.find((item) => item.id === id)

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

app.listen(PORT, () => {
    console.log(`Express server running at http://localhost:${PORT}`)
})