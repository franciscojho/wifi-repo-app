import nextConnect from "next-connect"

import dbMiddleware from "middlewares/dbConnect"
import loginApiSchema from "contants/schemas/login"
import validate from "middlewares/validateWithJoi"
import validatePassword from "middlewares/validatePassword"
import signupApiSchema from "contants/schemas/signup"

export default function router() {
    const loginMiddlewares = nextConnect().use("/api/auth/login", [
        validate({ body: loginApiSchema }),
        validatePassword,
    ])

    const signupMiddlewares = nextConnect().use(
        "/api/auth/signup",
        validate({ body: signupApiSchema })
    )

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
}
