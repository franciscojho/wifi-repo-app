import router from "handlers/nextRouter"
import markerGetController from "controllers/markers/get"

export default router().get(markerGetController)
