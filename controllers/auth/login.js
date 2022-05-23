import { NotFoundException } from "handlers/errors"
import generateToken from "utils/generateToken"
import User from "models/user"

export default async function loginController(req, res, next) {
    const { email } = req.body
    const user = await User.findOne({ email })
    if (!user) throw new NotFoundException("User not found")

    const token = generateToken(user._id)
    return res.status(200).json({ user, token, success: true })
}
