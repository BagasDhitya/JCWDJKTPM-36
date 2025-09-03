// Router -> untuk mendaftarkan endpoint dari tiap fitur

import { Router } from "express";
import { ProductController } from "../controllers/product.controller";

class ProductRouter {
    public router: Router
    private controller: ProductController

    constructor() {
        this.router = Router()
        this.controller = new ProductController()

        // daftarkan route nya
        this.initializeRoutes()
    }

    private initializeRoutes(): void {
        this.router.get('/products', this.controller.getAll)
        this.router.get('/products/:id', this.controller.getById)

        this.router.post('/products', this.controller.create)
        this.router.put('/products/:id', this.controller.update)

        this.router.delete('/products/:id', this.controller.delete)
    }
}

export default new ProductRouter().router