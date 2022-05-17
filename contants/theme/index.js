import { createTheme } from "@mui/material/styles"
import { red } from "@mui/material/colors"

// Create a theme instance.
const theme = createTheme({
    palette: {
        primary: {
            main: "#00aaff",
            light: "#33BBFF",
            dark: "#0076B2",
            contrastText: "#ffffff",
        },
        secondary: {
            main: "#262830",
            light: "#515359",
            dark: "#1a1c21",
            contrastText: "#ffffff",
        },
        error: {
            main: red.A400,
        },
        background: {
            default: "#f5f5f5",
        },
    },
})

export default theme
