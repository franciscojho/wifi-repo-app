import { useFormik } from "formik"
import Box from "@mui/material/Box"
import Button from "@mui/material/Button"
import Cookies from "js-cookie"
import Router from "next/router"

import AppLayout from "src/components/AppLayout"
import AuthLayout from "../AuthLayout"
import BackToArrow from "../BackToArrow"
import FormikTextField from "src/components/Inputs/FormikTextField"
import Link from "src/components/Link"
import loginFormSchema from "contants/schemas/loginForm"
import MainLogo from "src/components/MainLogo"
import noAuthHoc from "helpers/noAuthHoc"
import supafetch from "helpers/supafetch"
import useStore from "src/store"

function LoginPage() {
    const setError = useStore((state) => state.setError)
    const setUser = useStore((state) => state.setUser)

    const handleLogin = async (values) => {
        const resp = await supafetch.post("/api/auth/login", values)
        const data = await resp.json()

        if (data.success) {
            setUser(data.user)
            Cookies.set("token", data.token)
            Router.replace("/home")
        } else {
            setError(data.error)
        }
    }

    const formik = useFormik({
        initialValues: {
            email: "",
            password: "",
        },
        validationSchema: loginFormSchema,
        onSubmit: handleLogin,
    })

    return (
        <AppLayout>
            <AuthLayout>
                <BackToArrow
                    pushTo="/auth"
                    sx={{
                        position: "absolute",
                        top: 40,
                        left: 20,
                    }}
                />
                <MainLogo />
                <Box
                    component="form"
                    noValidate
                    onSubmit={formik.handleSubmit}
                    sx={{
                        display: "grid",
                        gap: 2,
                        height: "150px",
                        placeItems: "center",
                        maxWidth: "300px",
                    }}
                >
                    <FormikTextField
                        formik={formik}
                        autoFocus
                        label="Email"
                        name="email"
                        placeholder="Email"
                        size="small"
                    />

                    <FormikTextField
                        formik={formik}
                        label="Password"
                        name="password"
                        placeholder="Password"
                        size="small"
                        type="password"
                    />

                    <Button fullWidth type="submit" variant="contained">
                        Login
                    </Button>
                    <Link
                        href="/auth/signup"
                        sx={{
                            fontSize: 14,
                            color: "primary.dark",
                            textDecoration: "none",
                        }}
                    >
                        Do not have an account? Sign Up
                    </Link>
                </Box>
            </AuthLayout>
        </AppLayout>
    )
}

export default noAuthHoc(LoginPage)
