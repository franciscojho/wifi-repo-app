import { model, models, Schema } from "mongoose"
import bcrypt from "bcrypt"

const UserSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
})

UserSchema.pre("save", async function (next) {
    if (!this.password && !this.isModified("password")) return next()
    const hashedPassword = await bcrypt.hash(this.password, 10)
    this.password = hashedPassword
    next()
})

const User = models.User || model("User", UserSchema)

export default User
