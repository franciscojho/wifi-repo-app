import Router from "next/router"
import ArrowBack from "@mui/icons-material/ArrowBack"

export default function BackToArrow() {
    const handleReturn = () => Router.back()
    return (
        <ArrowBack
            onClick={handleReturn}
            cursor="pointer"
            sx={{
                position: "absolute",
                top: 40,
                left: 20,
            }}
        />
    )
}
