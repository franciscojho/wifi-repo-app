import nextConnect from "next-connect"

import dbMiddleware from "middlewares/dbConnect"
import loginApiSchema from "contants/schemas/loginApiSchema"
import validate from "middlewares/validateWithJoi"
import validatePassword from "middlewares/validatePassword"
import signupApiSchema from "contants/schemas/signupApiSchema"
import validateToken from "middlewares/validateToken"
import userApiSchema from "contants/schemas/userApiSchema"

export default function router() {
    const loginMiddlewares = nextConnect().use("/api/auth/login", [
        validate({ body: loginApiSchema }),
        validatePassword,
    ])

    const signupMiddlewares = nextConnect().use(
        "/api/auth/signup",
        validate({ body: signupApiSchema })
    )

    const checkUserMiddlewares = nextConnect().use("/api/user", [
        validate({ body: userApiSchema }),
        validateToken,
    ])

    return nextConnect({
        onError(err, req, res) {
            console.log(err)
            const status = err.status || 500
            const error = err.status ? err.message : "Internal server error"
            res.status(status).json({
                error,
            })
        },
        onNoMatch(req, res) {
            res.status(404).json({ error: "Not found" })
        },
    })
        .use(dbMiddleware)
        .use(loginMiddlewares)
        .use(signupMiddlewares)
        .use(checkUserMiddlewares)
}
