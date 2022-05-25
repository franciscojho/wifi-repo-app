import { model, models, Schema, SchemaTypes } from "mongoose"

const MarkerSchema = new Schema({
    wifi_spot_name: {
        type: String,
        required: true,
    },
    wifi_spot_address: {
        type: String,
        required: true,
    },
    wifi_spot_password: {
        type: String,
        required: true,
    },
    lat: {
        type: Number,
        required: true,
    },
    lng: {
        type: Number,
        required: true,
    },
    user: {
        type: SchemaTypes.ObjectId,
        ref: "User",
        required: true,
    },
})

const Marker = models.Marker || model("Marker", MarkerSchema)

export default Marker
