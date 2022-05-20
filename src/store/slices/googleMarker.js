const googleMarkerSlice = (set, get) => ({
    markers: [],
    setMarkers: (newMarker) =>
        set((state) => ({
            markers: [...state.markers, newMarker],
        })),
})

export default googleMarkerSlice
