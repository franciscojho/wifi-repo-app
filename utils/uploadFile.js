const formData = new URLSearchParams()

export default async function uploadFile(file64) {
    formData.append("file", file64.content)
    formData.append("api_key", process.env.CLOUDINARY_API_KEY)
    formData.append("upload_preset", process.env.CLOUDINARY_PRESET)
    formData.append("folder", "wifi_repo_avatars")
    const cloudinaryResponse = await fetch(process.env.CLOUDINARY_URL, {
        method: "POST",
        body: formData,
    })
    return await cloudinaryResponse
}
