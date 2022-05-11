import Joi from "joi"

const signupApiSchema = Joi.object({
    name: Joi.string().required(),
    email: Joi.string().email().required(),
    password: Joi.string().min(8).required(),
    confirmPassword: Joi.any().valid(Joi.ref("password")).required(),
}).unknown()

export default signupApiSchema
