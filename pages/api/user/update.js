import router from "handlers/nextRouter"
import userUpdateController from "controllers/user/update"

export const config = {
    api: {
        bodyParser: false,
    },
}

export default router().put(userUpdateController)
