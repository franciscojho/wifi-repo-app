import Avatar from "@mui/material/Avatar"
import Button from "@mui/material/Button"
import EditIcon from "@mui/icons-material/Edit"
import FormikTextField from "src/components/Inputs/FormikTextField"
import IconButton from "@mui/material/IconButton"
import Stack from "@mui/material/Stack"
import useStore from "src/store"

import AppLayout from "src/components/AppLayout"
import BackToArrow from "pages/auth/BackToArrow"
import PrivateRouteLayout from "src/components/PrivateRouteLayout"
import withAuthHoc from "helpers/withAuthHoc"
import { useFormik } from "formik"
import { useRef, useState } from "react"
import supafetch from "helpers/supafetch"

function ProfilePage() {
    const name = useStore((state) => state.name)
    const email = useStore((state) => state.email)
    const avatarUrl = useStore((state) => state.avatarUrl)
    const setUser = useStore((state) => state.setUser)
    const setError = useStore((state) => state.setError)
    const setSucess = useStore((state) => state.setSucess)

    const [selectedImg, setSelectedImg] = useState(null)

    const uploadInputRef = useRef()

    const uploadImage = async () => {
        const img = uploadInputRef.current.files[0]
        if (img) {
            const resp = await supafetch.cloudinaryUpload(img)
            const data = await resp.json()
            const cloudinaryUrl = data.secure_url
            setSelectedImg(null)
            return cloudinaryUrl
        }
        return null
    }

    const handleSubmitProfile = async (values) => {
        const cloudinaryUrl = await uploadImage()
        const resp = await supafetch.post("/api/user", {
            ...values,
            ...(cloudinaryUrl && { avatar_url: cloudinaryUrl }),
        })
        const data = await resp.json()
        setUser({ ...data.user })
        setSucess(data.message)
        if (data.error) {
            setError(data.error)
        }
    }

    const formik = useFormik({
        initialValues: {
            name,
            email,
        },
        onSubmit: handleSubmitProfile,
    })

    const handleClickUpload = () => {
        uploadInputRef.current.click()
    }

    const handleFileChange = (e) => {
        const img = e.target.files[0]
        if (img) {
            setSelectedImg(URL.createObjectURL(img))
        }
    }

    return (
        <AppLayout>
            <PrivateRouteLayout>
                <BackToArrow
                    sx={{
                        position: "absolute",
                        top: 40,
                        left: 20,
                    }}
                />
                <Stack
                    direction="column"
                    justifyContent="center"
                    alignItems="center"
                    component="form"
                    spacing={2}
                    onSubmit={formik.handleSubmit}
                    sx={{
                        padding: 6,
                        height: "100%",
                        width: "100%",
                    }}
                >
                    <IconButton onClick={handleClickUpload}>
                        <Avatar
                            alt={name}
                            src={selectedImg || avatarUrl}
                            sx={{
                                height: 100,
                                position: "relative",
                                width: 100,
                            }}
                        />
                        <EditIcon
                            sx={{
                                color: "primary.dark",
                                left: "50%",
                                position: "absolute",
                                transform: "translate(-50%, 0)",
                                width: 30,
                                height: 30,
                            }}
                        />
                    </IconButton>
                    <input
                        accept="image/*"
                        ref={uploadInputRef}
                        onChange={handleFileChange}
                        type="file"
                        style={{
                            display: "none",
                        }}
                    />
                    <FormikTextField
                        formik={formik}
                        name="name"
                        size="small"
                        variant="filled"
                    />
                    <FormikTextField
                        disabled
                        formik={formik}
                        name="email"
                        size="small"
                        variant="filled"
                    />
                    <Button type="submit" variant="contained">
                        Save Changes
                    </Button>
                </Stack>
            </PrivateRouteLayout>
        </AppLayout>
    )
}

export default withAuthHoc(ProfilePage)
