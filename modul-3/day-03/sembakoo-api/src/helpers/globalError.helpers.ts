import { Request, Response, NextFunction } from "express";

export class AppError extends Error {
    public statusCode: number
    public isOperational: boolean

    constructor(message: string, statusCode: number) {
        super(message)
        this.statusCode = statusCode
        this.isOperational = true

        Error.captureStackTrace(this, this.constructor)
    }
}

export function errorHandler(err: any, req: Request, res: Response, next: NextFunction) {
    const status = err.statusCode || 500
    const message = err.isOperational ? err.message : 'Internal server error'

    res.status(status).send({
        message: 'failure',
        detail: message
    })
}