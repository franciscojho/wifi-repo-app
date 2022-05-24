/* eslint-disable camelcase */
import User from "models/user"
import formatBufferTo64 from "utils/formatBufferTo64"
import uploadFile from "utils/uploadFile"

export default async function userUpdateController(req, res, next) {
    const img = req.files[0]
    const body = JSON.parse(req.body.data)
    const user = req.user
    let secure_url = null

    if (img) {
        const file64 = formatBufferTo64(img)
        const cloudinaryResponse = await uploadFile(file64)
        const data = await cloudinaryResponse.json()
        secure_url = data.secure_url
    }

    const newUser = await User.findByIdAndUpdate(
        user._id,
        { ...body, ...(secure_url && { avatar_url: secure_url }) },
        { new: true }
    )

    return res.status(200).json({
        user: newUser,
        message: "User updated successfully",
        success: true,
    })
}
