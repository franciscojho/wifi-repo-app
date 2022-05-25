const userSlice = (set, get) => ({
    name: null,
    email: null,
    avatarUrl: null,
    removeUser: () => set({ name: null, email: null, avatarUrl: null }),
    setUser: (user) =>
        set({
            name: user.name,
            email: user.email,
            avatarUrl: user.avatar_url,
        }),
})

export default userSlice
