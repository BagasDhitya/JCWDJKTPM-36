import express, { Application } from 'express'
import { Database } from './config/db'

export class App {
    private app: Application
    private port: number
    private database: Database

    constructor(port: number) {
        this.app = express()
        this.database = new Database()
        this.port = port

        this.initDatabase()
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