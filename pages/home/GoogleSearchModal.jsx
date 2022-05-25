import { useFormik } from "formik"
import { useState, useEffect } from "react"
import AddIcon from "@mui/icons-material/Add"
import Box from "@mui/material/Box"
import Fab from "@mui/material/Fab"
import Modal from "@mui/material/Modal"
import Typography from "@mui/material/Typography"
import usePlacesAutocomplete, {
    getGeocode,
    getLatLng,
} from "use-places-autocomplete"

import useStore from "src/store"
import GoogleModalForm from "./GoogleModalForm"
import supafetch from "helpers/supafetch"

export default function GoogleSearchModal({ panTo, sxButton, sxModal }) {
    const setMarkers = useStore((state) => state.setMarkers)
    const getUserId = useStore((state) => state.getUserId)
    const setError = useStore((state) => state.setError)
    const setSucess = useStore((state) => state.setSucess)

    const [lat, setLat] = useState(null)
    const [lng, setLng] = useState(null)
    const [open, setOpen] = useState(false)
    const handleOpen = () => setOpen(true)
    const handleClose = () => setOpen(false)

    const {
        value: address,
        suggestions: { data },
        setValue,
        clearSuggestions,
    } = usePlacesAutocomplete({
        requestOptions: {
            location: { lat: () => 43.6532, lng: () => -79.3832 },
            radius: 100 * 1000,
        },
    })

    const buildBody = (values) => ({
        user: getUserId(),
        wifi_spot_name: values.wifiSpotName,
        wifi_spot_password: values.wifiSpotPassword,
        wifi_spot_address: address,
        lat,
        lng,
    })

    const handleAddMarker = async (values) => {
        try {
            const resp = await supafetch.post(
                "/api/markers/add",
                buildBody(values)
            )
            const { marker, message } = await resp.json()
            setMarkers([{ ...marker }])
            handleClose()
            panTo({ lat, lng })
            setSucess(message)
        } catch (error) {
            setError(error.message)
        }
    }

    const formik = useFormik({
        initialValues: {
            wifiSpotName: "",
            wifiSpotPassword: "",
            wifiSpotAddress: "",
        },
        onSubmit: (values) => {
            handleAddMarker(values)
            formik.setValues(formik.initialValues)
        },
    })

    const handleChange = async (_, address) => {
        if (address) {
            setValue(address, false)
            clearSuggestions()

            try {
                const results = await getGeocode({ address })
                const { lat, lng } = getLatLng(results[0])
                setLat(lat)
                setLng(lng)
            } catch (error) {
                setError(error.message)
            }
        }
    }

    useEffect(() => {
        return () => clearSuggestions()
    }, [])

    return (
        <>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box
                    sx={{
                        bgcolor: "background.paper",
                        borderRadius: "5px",
                        boxShadow: 24,
                        left: "50%",
                        p: 2,
                        position: "absolute",
                        top: "50%",
                        transform: "translate(-50%, -50%)",
                        width: 400,
                    }}
                >
                    <Typography
                        component="h2"
                        gutterBottom
                        textAlign="center"
                        variant="h5"
                    >
                        ADD A NEW WIFI SPOT
                    </Typography>

                    <GoogleModalForm
                        data={data}
                        formik={formik}
                        handleChange={handleChange}
                        setValue={setValue}
                    />
                </Box>
            </Modal>

            <Fab
                color="primary"
                aria-label="add"
                onClick={handleOpen}
                sx={sxButton}
            >
                <AddIcon />
            </Fab>
        </>
    )
}
