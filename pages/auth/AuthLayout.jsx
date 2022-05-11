import Box from "@mui/material/Box"

export default function AuthLayout({ children }) {
    return (
        <Box
            sx={{
                display: "grid",
                placeItems: "center",
                placeContent: "center",
                position: "relative",
                width: "100%",
                height: "100%",
            }}
        >
            {children}
        </Box>
    )
}
