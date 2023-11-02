import { error } from 'console'
import { NextFunction, Request, Response } from 'express'
import { StatusCodes } from 'http-status-codes'
import ApiError from '~/utils/ApiError'

const createNew = async (req: Request, res: Response, next: NextFunction) => {
  try {
    res.status(StatusCodes.CREATED).json({ message: 'API POST from validation list board' })
    // throw new ApiError(StatusCodes.INSUFFICIENT_SPACE_ON_RESOURCE, 'error custom')
  } catch (error: any) {
    next(error)
  }
}

export const boardController = {
  createNew
}
