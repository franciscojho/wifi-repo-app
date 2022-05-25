import Marker from "models/marker"

export default async function markerGetController(req, res, next) {
    const markers = await Marker.find()
    return res.status(200).json({
        markers,
        success: true,
    })
}
