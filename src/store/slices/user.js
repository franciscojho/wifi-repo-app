const userSlice = (set, get) => ({
    uid: null,
    name: null,
    email: null,
    avatarUrl: null,
    getUserId: () => get().uid,
    removeUser: () =>
        set({ uid: null, name: null, email: null, avatarUrl: null }),
    setUser: (user) =>
        set({
            uid: user._id,
            name: user.name,
            email: user.email,
            avatarUrl: user.avatar_url,
        }),
})

export default userSlice
