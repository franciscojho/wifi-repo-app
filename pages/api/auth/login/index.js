import loginHandler from "handlers/auth/login"
import router from "handlers/nextRouter"

export default router().post(loginHandler)
