const googleMarkerSlice = (set, get) => ({
    markers: [],
    clearMarkers: () => set({ markers: [] }),
    setMarkers: (newMarkers) =>
        set({ markers: [...get().markers, ...newMarkers] }),
})

export default googleMarkerSlice
