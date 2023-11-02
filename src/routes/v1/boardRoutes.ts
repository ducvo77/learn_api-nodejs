import express, { Request, Response, Router } from 'express'
import { StatusCodes } from 'http-status-codes'

const router: Router = express.Router()

router
  .route('/')
  .get((req: Request, res: Response) => {
    res.status(StatusCodes.OK).json({ message: 'API get list board' })
  })
  .post((req: Request, res: Response) => {
    res.status(StatusCodes.CREATED).json({ message: 'API create list board' })
  })

export const boardRoutes = router
