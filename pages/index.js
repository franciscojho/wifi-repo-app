import { Stack } from "@mui/material"
import { useEffect, useState } from "react"
import Button from "@mui/material/Button"
import Cookies from "js-cookie"
import Router from "next/router"
import Typography from "@mui/material/Typography"

export default function Index() {
    const [token, setToken] = useState()
    const handleOnClick = () => {
        token ? Router.push("/home") : Router.push("/auth/login")
    }

    useEffect(() => {
        setToken(Cookies.get("token"))
    }, [])

    return (
        <Stack spacing={4}>
            <Typography variant="h1">WifiRepo</Typography>
            <Button onClick={() => handleOnClick()}>
                Ir a {token ? "Home" : "Login"}
            </Button>
        </Stack>
    )
}
