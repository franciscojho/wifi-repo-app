import Box from "@mui/material/Box"
import Button from "@mui/material/Button"
import EmailIcon from "@mui/icons-material/Email"
import GoogleIcon from "@mui/icons-material/Google"
import Typography from "@mui/material/Typography"

import Router from "next/router"

export default function GroupButtons() {
    const handleLoginWithEmail = () => Router.push("/auth/login")

    return (
        <Box
            sx={{
                display: "grid",
                placeItems: "center",
                maxWidth: "300px",
            }}
        >
            <Button
                fullWidth
                startIcon={<EmailIcon />}
                variant="contained"
                onClick={handleLoginWithEmail}
                sx={{ mt: 2, mb: 1 }}
            >
                Access with Email
            </Button>

            <Typography fontWeight="bold">Or</Typography>

            <Button
                disabled
                fullWidth
                startIcon={<GoogleIcon />}
                variant="contained"
                sx={{ mb: 2, mt: 1 }}
            >
                Access with Gmail
            </Button>
        </Box>
    )
}
