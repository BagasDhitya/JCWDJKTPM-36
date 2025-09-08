import { Router } from "express";
import { EmployeeController } from "../controllers/employee.controller";

export class EmployeeRouter {
    private router: Router
    private employeeController: EmployeeController

    constructor() {
        this.router = Router()
        this.employeeController = new EmployeeController
        this.initRoutes()
    }

    private initRoutes(): void {
        this.router.get('/', this.employeeController.getAll)
        this.router.get('/:id', this.employeeController.getById)
        this.router.post('/', this.employeeController.create)
        this.router.put('/:id', this.employeeController.update)
        this.router.delete('/:id', this.employeeController.softDelete)
        this.router.delete('/:id/hard', this.employeeController.hardDelete)
    }

    public getRouter(): Router {
        return this.router
    }
}