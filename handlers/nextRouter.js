import nextConnect from "next-connect"
import multer from "multer"

import dbMiddleware from "middlewares/dbConnect"
import loginApiSchema from "contants/schemas/loginApiSchema"
import markerApiSchema from "contants/schemas/markerApiSchema"
import signupApiSchema from "contants/schemas/signupApiSchema"
import validate from "middlewares/validateWithJoi"
import validatePassword from "middlewares/validatePassword"
import validateToken from "middlewares/validateToken"

export default function router() {
    const loginMiddlewares = nextConnect().use("/api/auth/login", [
        validate({ body: loginApiSchema }),
        validatePassword,
    ])

    const signupMiddlewares = nextConnect().use(
        "/api/auth/signup",
        validate({ body: signupApiSchema })
    )

    const userMiddlewares = nextConnect().put("/api/user/update", [
        validateToken,
        multer().any(),
    ])

    const markerMiddlerwares = nextConnect()
        .post("/api/markers/add", [
            validate({ body: markerApiSchema }),
            validateToken,
        ])
        .get("/api/markers/get", validateToken)

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
        .use(userMiddlewares)
        .use(markerMiddlerwares)
}
