export class HttpException extends Error {
    constructor(status, message) {
        super(message)
        this.status = status
        this.message = message
    }
}

export class BadRequestException extends HttpException {
    constructor(message) {
        super(400, message)
    }
}

export class UnauthorizedException extends HttpException {
    constructor(message) {
        super(401, message)
    }
}

export class NotFoundException extends HttpException {
    constructor(message) {
        super(404, message)
    }
}
