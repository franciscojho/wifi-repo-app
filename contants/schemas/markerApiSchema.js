import Joi from "joi"

const markerApiSchema = Joi.object({
    wifi_spot_name: Joi.string().required(),
    wifi_spot_address: Joi.string().required(),
    wifi_spot_password: Joi.string().required(),
    lat: Joi.number().required(),
    lng: Joi.number().required(),
    user: Joi.string().required(),
}).unknown()

export default markerApiSchema
