import loginController from "controllers/auth/login"
import router from "handlers/nextRouter"

export default router().post(loginController)
