import { Request, Response, NextFunction } from "express";
import fs from 'fs'
import path from 'path'

// counter untuk hit
let hitCounter = 0

export function apiLogger(req: Request, res: Response, next: NextFunction) {
    const start = Date.now()

    res.on('finish', () => {
        hitCounter++

        const timestamp = new Date().toLocaleString('id-ID', {
            timeZone: 'Asia/Jakarta'
        })

        const method = req.method
        const url = req.originalUrl
        const statusCode = res.statusCode
        const status = statusCode >= 200 && statusCode < 400 ? 'success' : 'failure'
        const duration = Date.now() - start

        const logMessage = `[${timestamp} | ${method} ${url} | Status: ${status} ${statusCode} | Hit: ${hitCounter} | ${duration}ms]\n`

        // tampilkan di console
        console.log(logMessage.trim())

        // simpan ke file logs/api.log
        const logDir = path.join(__dirname, '../logs')
        if (!fs.existsSync(logDir)) {
            fs.mkdirSync(logDir)
        }

        fs.appendFileSync(path.join(logDir, 'api.log'), logMessage)
    })

    next()
}