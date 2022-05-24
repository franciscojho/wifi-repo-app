import Cookies from "js-cookie"

export const supafetch = {
    post,
    put,
}

const fetchHeaders = {
    "Content-Type": "application/json",
    Accept: "application/json",
    ...(!!Cookies.get("token") && {
        Authorization: `Bearer ${Cookies.get("token")}`,
    }),
}

function formatBodyAndHeaders(data) {
    const isFormData = data instanceof FormData
    const body = isFormData ? data : JSON.stringify(data)
    const { "Content-Type": contentType, ...formDataHeaders } = fetchHeaders
    const headers = isFormData ? formDataHeaders : fetchHeaders
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

export default supafetch
