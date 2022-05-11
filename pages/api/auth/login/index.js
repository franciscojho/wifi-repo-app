import loginApiSchema from "contants/schemas/login"
import loginHandler from "handlers/auth/login"
import router from "handlers/nextRouter"
import validate from "middlewares/validateWithJoi"

export default router().post(validate({ body: loginApiSchema }), loginHandler)
