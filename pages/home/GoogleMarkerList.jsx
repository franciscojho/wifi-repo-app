import { Marker, InfoWindow } from "@react-google-maps/api"
import { useState } from "react"
import Stack from "@mui/material/Stack"
import Typography from "@mui/material/Typography"

import useStore from "src/store"

export default function GoogleMarkerList() {
    const [selected, setSelected] = useState(null)

    const markers = useStore((state) => state.markers)

    return (
        <>
            {markers.map((marker) => (
                <Marker
                    key={`${marker.lat}- ${marker.lng}`}
                    position={{ lat: marker.lat, lng: marker.lng }}
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
                            {selected.wifiSpotName}
                        </Typography>
                        <Typography component="p" variant="body2">
                            <Typography
                                component="span"
                                fontWeight="600"
                                variant="subtitle2"
                            >
                                Wifi Spot Password:&nbsp;
                            </Typography>
                            {selected.wifiSpotPassword}
                        </Typography>
                        <Typography component="p" variant="body2">
                            <Typography
                                component="span"
                                fontWeight="600"
                                variant="subtitle2"
                            >
                                Wifi Spot Address:&nbsp;
                            </Typography>
                            {selected.wifiSpotAddress}
                        </Typography>
                    </Stack>
                </InfoWindow>
            ) : null}
        </>
    )
}
