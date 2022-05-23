import Cookies from "js-cookie"

export const supafetch = {
    post,
    cloudinaryUpload,
}

function post(url, data) {
    return fetch(url, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            ...(!!Cookies.get("token") && {
                Authorization: `Bearer ${Cookies.get("token")}`,
            }),
        },
        body: JSON.stringify(data),
    })
}

function cloudinaryUpload(image) {
    const data = new FormData()

    data.append("file", image)
    data.append("api_key", process.env.CLOUDINARY_API_KEY)
    data.append("upload_preset", process.env.CLOUDINARY_PRESET)
    data.append("folder", "wifi_repo_avatars")

    return fetch(process.env.CLOUDINARY_URL, {
        method: "POST",
        body: data,
    })
}

export default supafetch
