import jwt from "jsonwebtoken"

export default function verifyClientToken(token) {
    return jwt.verify(token, process.env.JWT_SECRET, (err, decoded) =>
        err ? null : decoded
    )
}
