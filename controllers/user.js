import User from "models/user"

export default async function userController(req, res, next) {
    const body = req.body
    const { _id } = req.user
    const user = await User.findOneAndUpdate(_id, body, { new: true })
    return res
        .status(200)
        .json({ user, message: "User updated successfully", success: true })
}
