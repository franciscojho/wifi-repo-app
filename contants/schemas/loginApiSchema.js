import Joi from "joi"

const loginApiSchema = Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string().min(8).required(),
}).unknown()

export default loginApiSchema
