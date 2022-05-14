import generateToken from "utils/generateToken"
import User from "models/user"
import { NotFoundException } from "handlers/errors"

export default async function loginHandler(req, res, next) {
    const { email } = req.body
    const user = await User.findOne({ email })
    if (!user) throw new NotFoundException("User not found")

    const token = generateToken(user._id)
    return res.status(200).json({ user, token, success: true })
}
