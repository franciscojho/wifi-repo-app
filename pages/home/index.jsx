import AppLayout from "src/components/AppLayout"
import AuthLayout from "pages/auth/AuthLayout"
import Box from "@mui/material/Box"
import Button from "@mui/material/Button"
import Typography from "@mui/material/Typography"

import Cookies from "js-cookie"
import withAuth from "helpers/withAuth"
import Router from "next/router"

export default function HomePage(context) {
    const handleSignOut = () => {
        Cookies.remove("token")
        Router.push("auth/login")
    }

    return (
        <AppLayout>
            <AuthLayout>
                <Box
                    sx={{
                        width: "250px",
                        height: "100%",
                        display: "grid",
                        gap: 4,
                    }}
                >
                    <Typography variant="h4" textAlign="center">
                        Welcome to the app
                    </Typography>
                    <Button variant="outline" onClick={handleSignOut}>
                        Sign Out
                    </Button>
                </Box>
            </AuthLayout>
        </AppLayout>
    )
}

export const getServerSideProps = withAuth((context) => {
    return {
        props: {},
    }
})
