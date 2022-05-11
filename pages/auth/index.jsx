import AppLayout from "src/components/AppLayout"
import Box from "@mui/material/Box"

import MainLogo from "src/components/MainLogo"

import AuthLayout from "./AuthLayout"
import GroupButtons from "./GroupButtons"

export default function LoginPage() {
    return (
        <AppLayout>
            <AuthLayout>
                <MainLogo />
                <Box
                    sx={{
                        width: "250px",
                        height: "100%",
                    }}
                >
                    <GroupButtons />
                </Box>
            </AuthLayout>
        </AppLayout>
    )
}
