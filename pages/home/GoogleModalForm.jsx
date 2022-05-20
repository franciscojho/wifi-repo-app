import Autocomplete from "@mui/material/Autocomplete"
import Button from "@mui/material/Button"
import Stack from "@mui/material/Stack"

import FormikTextField from "src/components/Inputs/FormikTextField"

export default function GoogleModalForm({
    formik,
    setValue,
    data,
    handleChange,
}) {
    return (
        <Stack spacing={2} component="form" onSubmit={formik.handleSubmit}>
            <FormikTextField
                name="wifiSpotName"
                formik={formik}
                fullWidth
                label="Wifi Spot Name"
                size="small"
                required
                type="text"
            />
            <FormikTextField
                name="wifiSpotPassword"
                formik={formik}
                fullWidth
                label="Wifi Spot Password"
                size="small"
                required
                type="password"
            />
            <Autocomplete
                onChange={handleChange}
                onInputChange={(e, newValue) => setValue(newValue)}
                options={data.map((data) => data.description)}
                size="small"
                isOptionEqualToValue={(option, value) => option === value}
                renderInput={(params) => (
                    <FormikTextField
                        {...params}
                        name="wifiSpotAddress"
                        formik={formik}
                        required
                        label="Wifi Spot Address"
                    />
                )}
            />
            <Button variant="contained" type="submit">
                Save Wifi Spot
            </Button>
        </Stack>
    )
}
