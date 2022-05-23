/** @type {import('next').NextConfig} */
const nextConfig = {
    // reactStrictMode: true,
    env: {
        GOOGLE_MAPS_API_KEY: process.env.GOOGLE_MAPS_API_KEY,
        CLOUDINARY_API_KEY: process.env.CLOUDINARY_API_KEY,
        CLOUDINARY_URL: process.env.CLOUDINARY_URL,
        CLOUDINARY_PRESET: process.env.CLOUDINARY_PRESET,
    },
}

module.exports = nextConfig
