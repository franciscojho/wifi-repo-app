import { useState } from "react"
import Avatar from "@mui/material/Avatar"
import Box from "@mui/material/Box"
import Cookies from "js-cookie"
import IconButton from "@mui/material/IconButton"
import ListItemIcon from "@mui/material/ListItemIcon"
import Logout from "@mui/icons-material/Logout"
import Menu from "@mui/material/Menu"
import MenuItem from "@mui/material/MenuItem"
import Router from "next/router"
import Tooltip from "@mui/material/Tooltip"

import useStore from "src/store"

export default function AccountMenu() {
    const name = useStore((state) => state.name)
    const avatarUrl = useStore((state) => state.avatarUrl)
    const [anchorEl, setAnchorEl] = useState(null)

    const open = Boolean(anchorEl)

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget)
    }

    const handleClose = () => {
        setAnchorEl(null)
    }

    const handlePushTo = () => {
        Router.pathname === "/profile" && Router.push("/home")
        Router.pathname === "/home" && Router.push("/profile")
    }

    const handleSignOut = () => {
        Cookies.remove("token")
        Router.push("/auth")
    }

    return (
        <>
            <Box
                sx={{
                    alignItems: "center",
                    display: "flex",
                    paddingTop: 1,
                    position: "absolute",
                    textAlign: "center",
                    top: 0,
                    width: "100%",
                    zIndex: 1,
                }}
            >
                <Tooltip title="Settings">
                    <IconButton
                        onClick={handleClick}
                        size="small"
                        sx={{ ml: 2 }}
                        aria-controls={open ? "account-menu" : undefined}
                        aria-haspopup="true"
                        aria-expanded={open ? "true" : undefined}
                    >
                        <Avatar
                            alt={name}
                            src={avatarUrl}
                            sx={{ width: 36, height: 36 }}
                        />
                    </IconButton>
                </Tooltip>
            </Box>
            <Menu
                anchorEl={anchorEl}
                id="account-menu"
                open={open}
                onClose={handleClose}
                onClick={handleClose}
                PaperProps={{
                    elevation: 0,
                    sx: {
                        overflow: "visible",
                        filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
                        mt: 1.5,
                        "& .MuiAvatar-root": {
                            width: 32,
                            height: 32,
                            ml: -0.5,
                            mr: 1,
                        },
                        "&:before": {
                            content: '""',
                            display: "block",
                            position: "absolute",
                            top: 0,
                            right: 14,
                            width: 10,
                            height: 10,
                            bgcolor: "background.paper",
                            transform: "translateY(-50%) rotate(45deg)",
                            zIndex: 0,
                        },
                    },
                }}
                transformOrigin={{ horizontal: "right", vertical: "top" }}
                anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
            >
                <MenuItem onClick={handlePushTo}>
                    <Avatar src={avatarUrl} />
                    {Router.pathname === "/home" ? "Profile" : "Home"}
                </MenuItem>
                <MenuItem onClick={handleSignOut}>
                    <ListItemIcon>
                        <Logout fontSize="small" />
                    </ListItemIcon>
                    Logout
                </MenuItem>
            </Menu>
        </>
    )
}