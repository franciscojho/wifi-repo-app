import { useEffect, useState } from "react"
import Container from "@mui/material/Container"

import hexWithOpacity from "utils/hexWithOpacity"

export default function BackgroundLayout({ children }) {
    const [height, setHeight] = useState(0)

    useEffect(() => {
        setHeight(window.innerHeight)
    }, [])

    return (
        <Container
            disableGutters
            sx={(theme) => ({
                display: "grid",
                placeItems: "center",
                height: `${height}px`,
                backgroundImage: `radial-gradient(
                    ${hexWithOpacity(theme.palette.primary.dark, 0.5)} 1px,
                    ${hexWithOpacity(theme.palette.background.default, 0.3)} 1px
                ),
                radial-gradient(
                    ${hexWithOpacity(theme.palette.primary.dark, 0.5)} 1px, 
                    ${hexWithOpacity(
                        theme.palette.background.default,
                        0.3
                    )} 1px)`,
                backgroundPosition: "0 0, 25px 25px",
                backgroundSize: "50px 50px",
            })}
        >
            {children}
        </Container>
    )
}
