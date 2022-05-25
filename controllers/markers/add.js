import Marker from "models/marker"

export default async function markerAddController(req, res, next) {
    const marker = await Marker.create(req.body)
    return res.status(200).json({
        marker,
        success: true,
        message: "Marker created successfully",
    })
}
