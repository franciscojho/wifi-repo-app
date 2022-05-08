import Box from "@mui/material/Box"
import SignalWifiStatusbar4BarIcon from "@mui/icons-material/SignalWifiStatusbar4Bar"
import Typography from "@mui/material/Typography"

export default function MainLogo() {
    return (
        <Box
            sx={{
                display: "grid",
                placeItems: "center",
                width: "100%",
            }}
        >
            <SignalWifiStatusbar4BarIcon
                color="secondary.dark"
                sx={{
                    fontSize: "100px",
                }}
            />
            <Typography
                component="h1"
                fontWeight="bold"
                gutterBottom
                variant="h4"
            >
                WifiRepo
            </Typography>
        </Box>
    )
}
