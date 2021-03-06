import Cookies from "js-cookie"

export const supafetch = {
    post,
    put,
    get,
}

const fetchHeaders = () => {
    const token = Cookies.get("token")
    return {
        "Content-Type": "application/json",
        Accept: "application/json",
        ...(!!token && {
            Authorization: `Bearer ${token}`,
        }),
    }
}

function formatBodyAndHeaders(data) {
    const isFormData = data instanceof FormData
    const body = isFormData ? data : JSON.stringify(data)
    const { "Content-Type": contentType, ...formDataHeaders } = fetchHeaders()
    const headers = isFormData ? formDataHeaders : fetchHeaders()
    return {
        body,
        headers,
    }
}

function post(url, data, headers) {
    return fetch(url, {
        method: "POST",
        headers: formatBodyAndHeaders(data).headers,
        body: formatBodyAndHeaders(data).body,
    })
}

function put(url, data) {
    return fetch(url, {
        method: "PUT",
        headers: formatBodyAndHeaders(data).headers,
        body: formatBodyAndHeaders(data).body,
    })
}

function get(url, data) {
    return fetch(url, {
        method: "GET",
        headers: fetchHeaders(),
    })
}

export default supafetch
