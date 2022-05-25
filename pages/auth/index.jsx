import AppLayout from "src/components/AppLayout"
import Box from "@mui/material/Box"

import AuthLayout from "./AuthLayout"
import GroupButtons from "./GroupButtons"
import MainLogo from "src/components/MainLogo"
import noAuthHoc from "helpers/noAuthHoc"

function AccessPage() {
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

export default noAuthHoc(AccessPage)
