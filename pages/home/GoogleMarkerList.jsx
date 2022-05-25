import { Marker, InfoWindow } from "@react-google-maps/api"
import { useEffect, useState } from "react"
import Stack from "@mui/material/Stack"
import Typography from "@mui/material/Typography"

import useStore from "src/store"
import supafetch from "helpers/supafetch"

export default function GoogleMarkerList() {
    const clearMarkers = useStore((state) => state.clearMarkers)
    const setMarkers = useStore((state) => state.setMarkers)
    const markers = useStore((state) => state.markers)
    const setError = useStore((state) => state.setError)

    const [selected, setSelected] = useState(null)

    useEffect(() => {
        clearMarkers()
        async function getGoogleMarkers() {
            try {
                const resp = await supafetch.get("/api/markers/get")
                const { markers } = await resp.json()
                setMarkers(markers)
            } catch (error) {
                setError(error.message)
            }
        }
        getGoogleMarkers()
    }, [])

    return (
        <>
            {markers.map((marker) => (
                <Marker
                    key={marker._id}
                    position={{
                        lat: parseFloat(marker?.lat),
                        lng: parseFloat(marker?.lng),
                    }}
                    onClick={() => setSelected(marker)}
                    icon={{
                        url: "/wificon.svg",
                        origin: new window.google.maps.Point(0, 0),
                        anchor: new window.google.maps.Point(15, 15),
                        scaledSize: new window.google.maps.Size(30, 30),
                    }}
                />
            ))}

            {selected ? (
                <InfoWindow
                    position={{ lat: selected.lat, lng: selected.lng }}
                    onCloseClick={() => setSelected(null)}
                >
                    <Stack
                        component="div"
                        sx={{
                            width: "250px",
                        }}
                    >
                        <Typography component="p" variant="body2">
                            <Typography
                                component="span"
                                fontWeight="600"
                                variant="subtitle2"
                            >
                                Wifi Spot Name:&nbsp;
                            </Typography>
                            {selected.wifi_spot_name}
                        </Typography>
                        <Typography component="p" variant="body2">
                            <Typography
                                component="span"
                                fontWeight="600"
                                variant="subtitle2"
                            >
                                Wifi Spot Password:&nbsp;
                            </Typography>
                            {selected.wifi_spot_password}
                        </Typography>
                        <Typography component="p" variant="body2">
                            <Typography
                                component="span"
                                fontWeight="600"
                                variant="subtitle2"
                            >
                                Wifi Spot Address:&nbsp;
                            </Typography>
                            {selected.wifi_spot_address}
                        </Typography>
                    </Stack>
                </InfoWindow>
            ) : null}
        </>
    )
}
