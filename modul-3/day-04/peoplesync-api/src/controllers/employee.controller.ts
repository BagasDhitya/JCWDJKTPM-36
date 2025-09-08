import { Request, Response } from "express";
import { EmployeeService } from "../services/employee.service";
import { AppError } from "../helpers/error.helper";
import { EmployeeDTO } from "../dto/employee.dto";

export class EmployeeController {
    private employeeService: EmployeeService

    constructor() {
        this.employeeService = new EmployeeService()

        this.getAll = this.getAll.bind(this)
        this.getById = this.getById.bind(this)
        this.create = this.create.bind(this)
        this.update = this.update.bind(this)
        this.softDelete = this.softDelete.bind(this)
        this.hardDelete = this.hardDelete.bind(this)
    }

    public async getAll(req: Request, res: Response): Promise<void> {
        const search = req.query.search ? String(req.query.search) : undefined
        const sort = req.query.sort === 'asc' || req.query.sort === 'desc' ? (req.query.sort as 'asc' | 'desc') : undefined
        const role = req.query.role ? String(req.query.role) : undefined
        const page = req.query.page ? parseInt(String(req.query.page), 10) : 1
        const limit = req.query.limit ? parseInt(String(req.query.limit), 10) : 10

        const { data, total } = await this.employeeService.getAll({ search, sort, role, page, limit })

        if (!data || data.length === 0) {
            throw new AppError('No employees found', 404)
        }

        res.status(200).send({
            message: 'success',
            total,
            page,
            limit,
            data
        })
    }

    public async getById(req: Request, res: Response): Promise<void> {
        const { id } = req.params
        if (isNaN(Number(id))) throw new AppError('Invalid employee ID', 400)

        const employee = await this.employeeService.getById(Number(id))
        if (!employee) throw new AppError('Employee not found', 404)

        res.status(200).send({
            message: 'success',
            data: employee
        })
    }

    public async create(req: Request, res: Response): Promise<void> {
        const { name, email, role, salary }: EmployeeDTO = req.body

        if (!name || !email || !role || !salary) {
            throw new AppError('All fields are required', 400)
        }

        await this.employeeService.create({
            name,
            email,
            role,
            salary
        })

        res.status(201).send({
            message: 'success',
            detail: 'Successfully created employee data'
        })
    }

    public async update(req: Request, res: Response): Promise<void> {
        const { id } = req.params
        if (isNaN(Number(id))) throw new AppError('Invalid employee ID', 400)

        const { name, email, role, salary }: EmployeeDTO = req.body
        const updatedEmployee = await this.employeeService.update(Number(id), {
            name, email, role, salary
        })

        if (!updatedEmployee) throw new AppError('Employee not found or already deleted', 404)

        res.status(200).send({
            message: 'success',
            detail: 'Successfully updated employee data'
        })
    }

    public async softDelete(req: Request, res: Response): Promise<void> {
        const { id } = req.params
        if (isNaN(Number(id))) throw new AppError('Invalid employee ID', 400)

        const deletedEmployee = await this.employeeService.softDelete(Number(id))
        if (!deletedEmployee) throw new AppError('Employee not found or already deleted', 404)

        res.status(200).send({
            message: 'success',
            detail: 'Successfully deleted employee data with soft method'
        })
    }

    public async hardDelete(req: Request, res: Response): Promise<void> {
        const { id } = req.params
        if (isNaN(Number(id))) throw new AppError('Invalid employee ID', 400)

        const deletedEmployee = await this.employeeService.hardDelete(Number(id))
        if (!deletedEmployee) throw new AppError('Employee not found or already deleted', 404)

        res.status(200).send({
            message: 'success',
            detail: 'Successfully deleted employee data with hard method'
        })
    }
}