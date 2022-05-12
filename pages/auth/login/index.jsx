import { useFormik } from "formik"
import Box from "@mui/material/Box"
import Button from "@mui/material/Button"

import AppLayout from "src/components/AppLayout"
import FormikTextField from "src/components/Inputs/FormikTextField"
import Link from "src/components/Link"
import loginFormSchema from "src/schemas/loginForm"
import MainLogo from "src/components/MainLogo"

import AuthLayout from "../AuthLayout"
import BackToArrow from "../BackToArrow"

export default function LoginPage() {
    const formik = useFormik({
        initialValues: {
            email: "",
            password: "",
        },
        validationSchema: loginFormSchema,
        onSubmit: (values) => console.log("submitted"),
    })

    return (
        <AppLayout>
            <AuthLayout>
                <BackToArrow />
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
