import nextConnect from "next-connect"
import validatePassword from "middlewares/validatePassword"

export default function router() {
    return (
        nextConnect({
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
            // .use(dbConnect)
            .use("/api/auth/login", validatePassword)
    )
}
