import styled from "@emotion/styled"

import hexWithOpacity from "utils/hexWithOpacity"

const CustomContainer = styled("div")(({ theme }) => ({
    display: "grid",
    placeItems: "center",
    height: "100vh",
    backgroundImage: `radial-gradient(
        ${hexWithOpacity(theme.palette.primary.dark, 0.5)} 1px,
        ${hexWithOpacity(theme.palette.background.default, 0.3)} 1px
    ),
    radial-gradient(
        ${hexWithOpacity(theme.palette.primary.dark, 0.5)} 1px, 
        ${hexWithOpacity(theme.palette.background.default, 0.3)} 1px)`,
    backgroundPosition: "0 0, 25px 25px",
    backgroundSize: "50px 50px",
}))

export default function BackgroundLayout({ children }) {
    return <CustomContainer>{children}</CustomContainer>
}
