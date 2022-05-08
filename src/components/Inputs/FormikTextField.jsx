import TextField from "@mui/material/TextField"

export default function FormikTextField({
    formik,
    name,
    label,
    type = "text",
    ...props
}) {
    return (
        <TextField
            fullWidth
            id={name}
            name={name}
            label={label}
            type={type}
            value={formik?.values[name]}
            onChange={formik?.handleChange}
            error={formik?.touched[name] && Boolean(formik?.errors[name])}
            helperText={formik?.touched[name] && formik?.errors[name]}
            {...props}
        />
    )
}
