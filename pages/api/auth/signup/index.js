import router from "handlers/nextRouter"
import signupApiSchema from "contants/schemas/signup"
import signupHandler from "handlers/auth/signup"
import validate from "middlewares/validateWithJoi"

export default router().post(validate({ body: signupApiSchema }), signupHandler)
