import router from "handlers/nextRouter"
import signupHandler from "handlers/auth/signup"

export default router().post(signupHandler)
