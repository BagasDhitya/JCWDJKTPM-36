import { Pool } from 'pg'
import dotenv from 'dotenv'

dotenv.config()
export class Database {
    private pool: Pool

    constructor() {
        this.pool = new Pool({
            user: process.env.DB_USER,
            host: process.env.DB_HOST,
            database: process.env.DB_NAME,
            password: process.env.DB_PASSWORD,
            port: Number(process.env.DB_PORT)
        })
    }

    public async connect(): Promise<void> {
        try {
            const client = await this.pool.connect()
            console.log('Database Connected!')
            client.release()
        } catch (error) {
            console.error('Database Connection Failed : ', error)
            process.exit(1)
        }
    }

    public getPool(): Pool {
        return this.pool
    }
}