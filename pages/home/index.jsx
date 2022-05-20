/* eslint-disable no-unused-vars */
import { GoogleMap, useJsApiLoader } from "@react-google-maps/api"
import { useCallback, useRef, useState } from "react"
import Box from "@mui/material/Box"

import { center, libraries, options } from "contants/googleMap"
import AccountMenu from "src/components/AccountMenu"
import AppLayout from "src/components/AppLayout"
import GoogleMarkerList from "./GoogleMarkerList"
import GoogleSearchModal from "./GoogleSearchModal"
import withAuthHoc from "helpers/withAuthHoc"

function HomePage() {
    const [tilesLoaded, setTilesLoaded] = useState(false)
    const mapRef = useRef()

    const { isLoaded, loadError } = useJsApiLoader({
        googleMapsApiKey: process.env.GOOGLE_MAPS_API_KEY,
        libraries,
    })

    const onMapLoad = useCallback((map) => {
        mapRef.current = map
    }, [])

    const panTo = useCallback(({ lat, lng }) => {
        mapRef.current.panTo({ lat, lng })
        mapRef.current.setZoom(14)
    }, [])

    if (loadError) return <div>Error loading maps</div>
    if (!isLoaded) return <div>Loading maps...</div>

    return (
        <AppLayout>
            <Box
                sx={{
                    width: "100%",
                    height: "100%",
                    position: "relative",
                }}
            >
                <AccountMenu />
                <GoogleSearchModal
                    panTo={panTo}
                    sxButton={{
                        position: "absolute",
                        right: "40px",
                        bottom: "40px",
                    }}
                />
                <GoogleMap
                    id="map"
                    options={options}
                    center={center}
                    zoom={12}
                    onLoad={onMapLoad}
                    onTilesLoaded={() => setTilesLoaded(true)}
                    mapContainerStyle={{
                        height: "100%",
                        width: "100%",
                    }}
                >
                    {tilesLoaded && <GoogleMarkerList />}
                </GoogleMap>
            </Box>
        </AppLayout>
    )
}

export default withAuthHoc(HomePage)
