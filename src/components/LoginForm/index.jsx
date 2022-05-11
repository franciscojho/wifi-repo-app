import Box from "@mui/material/Box"
import Button from "@mui/material/Button"
import EmailIcon from "@mui/icons-material/Email"
import GoogleIcon from "@mui/icons-material/Google"
import Typography from "@mui/material/Typography"
import TextField from "@mui/material/TextField"

import useLoginStore from "src/store/useToggleStore"

export default function LoginForm() {
    const { toggle, setToggle } = useLoginStore()

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log("submitted")
    }

    const handleClick = (e) => {
        setToggle(e.target.dataset.login)
    }

    return (
        <Box
            component="form"
            noValidate
            onSubmit={handleSubmit}
            sx={{
                display: "grid",
                height: "150px",
                placeItems: "center",
                width: "100%",
            }}
        >
            {!toggle && (
                <Box
                    sx={{
                        display: "grid",
                        placeItems: "center",
                    }}
                >
                    <Button
                        data-login="email"
                        fullWidth
                        startIcon={<EmailIcon />}
                        variant="contained"
                        onClick={handleClick}
                        sx={{ mt: 2, mb: 1 }}
                    >
                        Login with Email
                    </Button>

                    <Typography fontWeight="bold">O</Typography>

                    <Button
                        data-login="google"
                        fullWidth
                        startIcon={<GoogleIcon />}
                        variant="contained"
                        // onClick={handleClick}
                        sx={{ mb: 2, mt: 1 }}
                    >
                        Login with Gmail
                    </Button>
                </Box>
            )}

            {toggle === "email" && (
                <TextField
                    autoFocus
                    label="Email"
                    name="email"
                    placeholder="Email"
                    size="small"
                />
            )}

            {toggle === "email" && (
                <Button fullWidth type="submit" variant="contained">
                    Login
                </Button>
            )}
        </Box>
    )
}
