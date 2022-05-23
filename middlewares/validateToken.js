import jwt from "jsonwebtoken"

import { BadRequestException, UnauthorizedException } from "handlers/errors"
import User from "models/user"

async function jwtCallback(err, { uid, ...rest }) {
    if (err) throw new UnauthorizedException("Invalid token")
    const user = await User.findById(uid)
    if (!user)
        throw new UnauthorizedException(
            "You don't permissions to perform this action"
        )
    return user
}

export default async function validateToken(req, res, next) {
    const bearerToken = req.headers.authorization
    if (bearerToken && bearerToken.includes("Bearer")) {
        const token = bearerToken.split(" ")[1]
        const user = await jwt.verify(
            token,
            process.env.JWT_SECRET,
            jwtCallback
        )
        req.user = user
    } else {
        throw new BadRequestException("Token is malformed")
    }

    next()
}
