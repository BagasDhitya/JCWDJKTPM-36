import express, { Application } from 'express'
import { Database } from './config/db'
import { errorHandler } from './helpers/error.helper'
import { EmployeeRouter } from './router/employee.router'

export class App {
    private app: Application
    private port: number
    private database: Database
    private employeeRouter: EmployeeRouter

    constructor(port: number) {
        this.app = express()
        this.database = new Database()
        this.employeeRouter = new EmployeeRouter()
        this.port = port

        this.initDatabase()
        this.initRoutes()
        this.initErrorHandler()
    }

    public initErrorHandler() {
        this.app.use(errorHandler)
    }

    public initRoutes() {
        this.app.use('/api/employees', this.employeeRouter.getRouter())
    }

    public async initDatabase(): Promise<void> {
        await this.database.connect()
    }

    public listen(): void {
        this.app.listen(this.port, () => {
            console.log(`Server running at http://localhost:${this.port}`)
        })
    }
}

const port = 8000
const server = new App(port)
server.listen()