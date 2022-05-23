import Joi from "joi"

const userApiSchema = Joi.object({
    name: Joi.string(),
    email: Joi.string().email(),
    avatarUrl: Joi.string().uri(),
}).unknown()

export default userApiSchema
