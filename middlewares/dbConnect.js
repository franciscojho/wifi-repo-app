import mongoose from "mongoose"
import nextConnect from "next-connect"

const MONGODB_URI = process.env.MONGO_URI

if (!MONGODB_URI) {
    throw new Error(
        "Please define the MONGODB_URI environment variable inside .env.local"
    )
}

/**
 * Global is used here to maintain a cached connection across hot reloads
 * in development. This prevents connections growing exponentially
 * during API Route usage.
 */
let cached = global.mongoose

if (!cached) {
    cached = global.mongoose = { conn: null, promise: null }
}

async function dbConnect() {
    if (cached.conn) {
        return cached.conn
    }

    if (!cached.promise) {
        const opts = {
            bufferCommands: false,
        }

        cached.promise = mongoose
            .connect(MONGODB_URI, opts)
            .then((mongoose) => {
                return mongoose
            })
    }
    cached.conn = await cached.promise
    return cached.conn
}

mongoose.connection.on("connected", () => {
    console.log("Mongoose default connection open to ", MONGODB_URI)
})

mongoose.connection.on("error", (err) => {
    console.log("Mongoose default connection error: ", err)
})

const middleware = nextConnect()
middleware.use(dbConnect)