import jwt from "jsonwebtoken"

export default function generateToken(uid) {
    const secret = process.env.JWT_SECRET
    const expiresIn = process.env.JWT_EXPIRES_IN
    const token = jwt.sign({ uid }, secret, {
        expiresIn,
    })
    return token
}
