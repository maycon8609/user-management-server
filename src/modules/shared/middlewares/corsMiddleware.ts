import { Request, Response, NextFunction } from 'express'

export function corsMiddleware(_request: Request, response: Response, next: NextFunction) {
  response.header('Access-Control-Allow-Origin', '*')
  response.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE')
  response.header('Access-Control-Allow-Headers', 'Content-Type')
  next()
}
