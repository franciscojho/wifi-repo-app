import Box from "@mui/material/Box"

export default function PrivateRouteLayout({ children }) {
    return (
        <Box
            sx={{
                width: "100%",
                height: "100%",
                position: "relative",
            }}
        >
            {children}
        </Box>
    )
}
