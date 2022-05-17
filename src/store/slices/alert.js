const alertSlice = (set, get) => ({
    message: null,
    severity: null,
    setError: (message) => set({ severity: "error", message }),
    setSucess: (message) => set({ severity: "success", message }),
    clearAlert: () => set({ message: null, severity: null }),
})

export default alertSlice
