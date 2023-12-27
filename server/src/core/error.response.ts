import { ReasonPhrases, StatusCodes } from '../constants/httpStatusCode'

class ErrorResponse extends Error {
  status: any
  errors: any
  isOperational: any

  constructor(message: string, status: number, errors: any, isOperational: boolean) {
    super(message)
    Object.setPrototypeOf(this, new.target.prototype)
    this.status = status
    this.errors = errors
    this.isOperational = isOperational
    Error.captureStackTrace(this, this.constructor)
  }
}

class ConflictRequestError extends ErrorResponse {
  constructor(message = ReasonPhrases.CONFLICT, errors = [], status = StatusCodes.CONFLICT, isOperational = true) {
    super(message, status, errors, isOperational)
  }
}

class BadRequestError extends ErrorResponse {
  constructor(
    message = ReasonPhrases.BAD_REQUEST,
    errors = [],
    status = StatusCodes.BAD_REQUEST,
    isOperational = true
  ) {
    super(message, status, errors, isOperational)
  }
}

class AuthFailureError extends ErrorResponse {
  constructor(
    message = ReasonPhrases.UNAUTHORIZED,
    errors = [],
    status = StatusCodes.UNAUTHORIZED,
    isOperational = true
  ) {
    super(message, status, errors, isOperational)
  }
}

class NotFoundError extends ErrorResponse {
  constructor(message = ReasonPhrases.NOT_FOUND, errors = [], status = StatusCodes.NOT_FOUND, isOperational = true) {
    super(message, status, errors, isOperational)
  }
}

class ForbiddenError extends ErrorResponse {
  constructor(message = ReasonPhrases.FORBIDDEN, errors = [], status = StatusCodes.FORBIDDEN, isOperational = true) {
    super(message, status, errors, isOperational)
  }
}

export { AuthFailureError, BadRequestError, ConflictRequestError, ErrorResponse, ForbiddenError, NotFoundError }
