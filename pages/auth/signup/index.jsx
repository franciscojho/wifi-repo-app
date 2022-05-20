import { useFormik } from "formik"
import Box from "@mui/material/Box"
import Button from "@mui/material/Button"
import Cookies from "js-cookie"
import Router from "next/router"

import AppLayout from "src/components/AppLayout"
import FormikTextField from "src/components/Inputs/FormikTextField"
import Link from "src/components/Link"
import MainLogo from "src/components/MainLogo"
import noAuth from "helpers/noAuth"
import registerformSchema from "contants/schemas/registerForm"
import supafetch from "helpers/supafetch"
import useStore from "src/store"

import AuthLayout from "../AuthLayout"
import BackToArrow from "../BackToArrow"

export default function RegisterForm() {
    const setError = useStore((state) => state.setError)

    const handleSignUp = async (values) => {
        const resp = await supafetch.post("/api/auth/signup", values)
        const data = await resp.json()
        console.log(data)
        if (data.success) {
            Cookies.set("token", data.token)
            Router.replace("/home")
        } else {
            setError(data.error)
        }
    }

    const formik = useFormik({
        initialValues: {
            name: "",
            email: "",
            password: "",
            confirmPassword: "",
        },
        validationSchema: registerformSchema,
        onSubmit: handleSignUp,
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
                        height: "100%",
                        placeItems: "center",
                    }}
                >
                    <FormikTextField
                        formik={formik}
                        fullWidth
                        autoFocus
                        label="Name"
                        name="name"
                        placeholder="Name"
                        size="small"
                    />
                    <FormikTextField
                        formik={formik}
                        fullWidth
                        label="Email"
                        name="email"
                        placeholder="Email"
                        size="small"
                        type="email"
                    />
                    <FormikTextField
                        formik={formik}
                        fullWidth
                        label="Password"
                        name="password"
                        placeholder="Password"
                        size="small"
                        type="password"
                    />
                    <FormikTextField
                        formik={formik}
                        fullWidth
                        label="Confirm Password"
                        name="confirmPassword"
                        placeholder="Confirm Password"
                        size="small"
                        type="password"
                    />

                    <Button fullWidth type="submit" variant="contained">
                        Register
                    </Button>
                    <Link
                        href="/auth/login"
                        sx={{
                            fontSize: 14,
                            color: "primary.dark",
                            textDecoration: "none",
                        }}
                    >
                        Already a member? Login
                    </Link>
                </Box>
            </AuthLayout>
        </AppLayout>
    )
}

export const getServerSideProps = noAuth((context) => {
    return {
        props: {},
    }
})
