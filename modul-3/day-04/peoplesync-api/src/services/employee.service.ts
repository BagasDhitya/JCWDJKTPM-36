import { Database } from "../config/db";
import { Pool } from "pg";
import { EmployeeDTO } from "../dto/employee.dto";

interface IFilter {
    search?: string,
    sort?: 'asc' | 'desc',
    role?: string,
    page: number,
    limit: number
}

export class EmployeeService {
    private pool: Pool

    constructor() {
        const db = new Database()
        this.pool = db.getPool()
    }

    public async getAll({ search, sort, role, page = 1, limit = 10 }: IFilter): Promise<{ data: EmployeeDTO[]; total: number }> {
        let baseQuery = `SELECT * FROM employee WHERE deleted_at IS NULL`

        const values: any[] = []
        let paramIndex = 1

        // search by name
        if (search) {
            baseQuery += ` AND name ILIKE $${paramIndex}`
            values.push(`%${search}%`)
            paramIndex++
        }

        // filter by role
        if (role) {
            baseQuery += ` AND role = $${paramIndex}`
            values.push(role)
            paramIndex++
        }

        // sort by salary
        if (sort) {
            baseQuery += ` ORDER BY salary ${sort.toUpperCase()}`
        } else {
            baseQuery += ` ORDER BY id ASC`
        }

        // hitung total data untuk pagination
        const countQuery = `SELECT COUNT(*) FROM (${baseQuery}) AS count_table`
        const countResult = await this.pool.query(countQuery, values)
        const total = parseInt(countResult.rows[0].count, 10)

        // pagination
        const offset = (page - 1) * limit
        baseQuery += ` LIMIT $${paramIndex} OFFSET $${paramIndex + 1}`
        values.push(limit, offset)

        const result = await this.pool.query(baseQuery, values)
        return { data: result.rows, total }
    }

    public async getById(id: number): Promise<EmployeeDTO> {
        const query = `SELECT * FROM employee WHERE id = $1 AND deleted_at IS NULL`
        const result = await this.pool.query(query, [id])
        return result.rows[0] || null
    }

    public async create(data: EmployeeDTO): Promise<EmployeeDTO> {
        const query = `INSERT INTO employee (name, email, role, salary) VALUES ($1, $2, $3, $4) RETURNING *`
        const values = [data.name, data.email, data.role, data.salary]
        const result = await this.pool.query(query, values)
        return result.rows[0]
    }

    public async update(id: number, data: Partial<EmployeeDTO>): Promise<EmployeeDTO> {
        const query = `
        UPDATE employee
        SET
           name = COALESCE($1, name),
           email = COALESCE($2, email),
           role = COALESCE($3, role),
           salary = COALESCE($4, salary),
           updated_at = NOW()
        WHERE id = $5 AND deleted_at IS NULL
        RETURNING *
        `
        const values = [data.name, data.email, data.role, data.salary, id]
        const result = await this.pool.query(query, values)
        return result.rows[0] || null
    }

    public async softDelete(id: number): Promise<EmployeeDTO> {
        const query = `
        UPDATE employee
        SET deleted_at = NOW()
        WHERE id = $1 AND deleted_at IS NULL
        RETURNING *
        `
        const result = await this.pool.query(query, [id])
        return result.rows[0] || null
    }

    public async hardDelete(id: number): Promise<EmployeeDTO> {
        const query = `DELETE FROM employee WHERE id = $1`
        const result = await this.pool.query(query, [id])
        return result.rows[0]
    }
}