export class BaseError {
  constructor(...args: [string]) {
    Error.apply(this, args)
  }
}

BaseError.prototype = Error

export class StandardError extends BaseError {
  constructor(errorCode: number, message: string) {
    super(message)
  }
}
