import { Database } from "../config/db";
import { Pool } from "pg";
import { EmployeeDTO } from "../dto/employee.dto";

export class EmployeeService {
    private pool: Pool

    constructor() {
        const db = new Database()
        this.pool = db.getPool()
    }

    public async getAll(): Promise<EmployeeDTO[]> {
        const query = `SELECT * FROM employee WHERE deleted_at IS NULL ORDER BY id ASC`
        const result = await this.pool.query(query)
        return result.rows
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