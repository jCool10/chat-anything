import { Response } from 'express'
import { ReasonPhrases, StatusCodes } from '../constants/httpStatusCode'

class SuccessResponse {
  message?: string
  status: number
  data: object
  options: object

  constructor({ message = ReasonPhrases.OK, status = StatusCodes.OK, data = {}, options = {} }) {
    this.message = message
    this.status = status
    this.data = data
    this.options = options
  }

  send(res: Response) {
    return res.status(this.status).json(this)
  }
}

class Ok extends SuccessResponse {
  constructor({ message = ReasonPhrases.OK, data = {}, options = {} }) {
    super({ message, data, options })
  }
}

export { SuccessResponse, Ok }
