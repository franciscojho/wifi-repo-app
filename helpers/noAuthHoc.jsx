// import parseCookie from "utils/parseCookie"
import Cookies from "js-cookie"
import Router from "next/router"
import { useEffect, useState } from "react"
import verifyClientToken from "utils/verifyClientToken"

export default function noAuthHoc(Component) {
    const AuthenticatedComponent = (props) => {
        const [isAuthed, setIsAuthed] = useState(false)

        useEffect(() => {
            const token = Cookies.get("token")
            const decoded = verifyClientToken(token)
            if (!decoded) {
                Cookies.remove("token")
            } else {
                Router.push("/home")
                setIsAuthed(!!decoded)
            }
        }, [])

        return !isAuthed ? <Component {...props} /> : null
    }
    return AuthenticatedComponent
}
