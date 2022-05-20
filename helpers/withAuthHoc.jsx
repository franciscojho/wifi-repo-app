// import parseCookie from "utils/parseCookie"
import Cookies from "js-cookie"
import Router from "next/router"
import { useEffect, useState } from "react"

export default function withAuthHoc(Component) {
    const AuthenticatedComponent = (props) => {
        const [isAuthed, setIsAuthed] = useState(false)

        useEffect(() => {
            const token = Cookies.get("token")

            if (!token) {
                Router.push("/auth/login")
            } else {
                setIsAuthed(!!token)
            }
        }, [])

        return isAuthed ? <Component {...props} /> : null
    }
    return AuthenticatedComponent
}
