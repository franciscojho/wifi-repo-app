import router from "handlers/nextRouter"
import signupController from "controllers/auth/signup"

export default router().post(signupController)
