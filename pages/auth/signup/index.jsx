import { useFormik } from "formik"
import Box from "@mui/material/Box"
import Button from "@mui/material/Button"

import AppLayout from "src/components/AppLayout"
import FormikTextField from "src/components/Inputs/FormikTextField"
import Link from "src/components/Link"
import MainLogo from "src/components/MainLogo"
import registerformSchema from "src/schemas/registerForm"

import AuthLayout from "../AuthLayout"
import BackToArrow from "../BackToArrow"

export default function RegisterForm() {
    const formik = useFormik({
        initialValues: {
            name: "",
            email: "",
            password: "",
            confirmPassword: "",
        },
        validationSchema: registerformSchema,
        onSubmit: (values) => console.log("submitted", values),
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
                        height: "100%",
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
