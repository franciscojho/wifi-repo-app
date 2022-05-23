import { BadRequestException } from "handlers/errors"
import generateToken from "utils/generateToken"
import User from "models/user"

export default async function signupController(req, res) {
    const { name, email, password } = req.body
    let user = await User.findOne({ email })
    if (user) throw new BadRequestException("This user is already registered")

    user = await User.create({ name, email, password })
    const token = generateToken(user._id)
    return res.status(200).json({ user, token, success: true })
}
