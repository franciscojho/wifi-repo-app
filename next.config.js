/** @type {import('next').NextConfig} */
const nextConfig = {
    // reactStrictMode: true,
    env: {
        GOOGLE_MAPS_API_KEY: process.env.GOOGLE_MAPS_API_KEY,
        JWT_SECRET: process.env.JWT_SECRET,
    },
}

module.exports = nextConfig
