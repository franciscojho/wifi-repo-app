import Router from "next/router"
import ArrowBack from "@mui/icons-material/ArrowBack"

export default function BackToArrow({ pushTo, sx }) {
    const handleReturn = () => (pushTo ? Router.push(pushTo) : Router.back())
    return <ArrowBack onClick={handleReturn} cursor="pointer" sx={sx} />
}
