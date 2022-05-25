import router from "handlers/nextRouter"
import markerAddController from "controllers/markers/add"

export default router().post(markerAddController)
