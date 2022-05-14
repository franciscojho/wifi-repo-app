import bcrypt from "bcrypt"

import { NotFoundException, UnauthorizedException } from "handlers/errors"
import User from "models/user"

export default async function validatePassword(req, _, next) {
    const { password, email } = req.body
    const user = await User.findOne({ email }).lean()

    if (!user) {
        throw new NotFoundException("User not found")
    }

    const isMatch = await bcrypt.compare(password, user.password)

    if (!isMatch) {
        throw new UnauthorizedException("Invalid password")
    }

    next()
}
