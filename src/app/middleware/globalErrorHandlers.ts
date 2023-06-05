import { ErrorRequestHandler, NextFunction, Request, Response } from 'express'
import { IgenericErrorMessage } from '../../interfaces/error'
import handleValidationError from '../../errors/handleValidationError'
import ApiError from '../../errors/ApiErrors'
import config from '../../config'
import { errorLogger } from '../../shared/logger'

// global error handler
const globalErrorHandlers: ErrorRequestHandler = (
  err: any,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  config.env === 'development'
    ? console.log('GLobal Error Handler ~ ', err)
    : errorLogger.error('GLobal Error Handler ~', err)

  let statusCode = 500
  let message = 'Something went wrong !'
  let errorMessages: IgenericErrorMessage[] = []

  if (err?.name === 'ValidationError') {
    const simplifiedError = handleValidationError(err)
    statusCode = simplifiedError.statusCode
    message = simplifiedError.message
    errorMessages = simplifiedError.errorMessages
  } else if (err instanceof ApiError) {
    statusCode = err?.statusCode
    message = err.message
    errorMessages = err?.message
      ? [
          {
            path: '',
            message: [err?.message],
          },
        ]
      : []
  } else if (err instanceof Error) {
    message = err?.message
    errorMessages = err?.message
      ? [
          {
            path: '',
            message: [err?.message],
          },
        ]
      : []
  }

  res.status(statusCode).json({
    status: false,
    message,
    errorMessages,
    stack: config.env !== 'production' ? err?.stack : undefined,
  })

  next()
}

export default globalErrorHandlers
