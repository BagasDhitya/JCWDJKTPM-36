import { Request, Response, NextFunction } from "express";

export class AppError extends Error {
    public statusCode: number
    public isOperational: boolean

    constructor(message: string, statusCode: number = 500) {
        super(message)
        this.statusCode = statusCode
        this.isOperational = true
    }
}

export function errorHandler(err: Error, req: Request, res: Response) {
    // jika error dari AppError
    if (err instanceof AppError) {
        return res.status(err.statusCode).send({
            message: 'failure',
            detail: err.message
        })
    }

    // jika error tidak dikenal
    console.error('Unexpected error : ', err)

    return res.status(500).send({
        message: 'failure',
        detail: 'Internal server error'
    })
}