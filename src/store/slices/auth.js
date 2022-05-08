const user = {
    name: "Francisco Huapaya",
    email: "franciscojho@hotmail.com",
    avatar: "https://avatars.githubusercontent.com/u/42306296",
}

async function fetchFakeUser(email) {
    if (email === user.email)
        return await new Promise((resolve) => setTimeout(resolve(user), 3000))
    else return null
}

export const authSlice = (set, get) => ({
    user: null,
    isUser: false,
    isAuthed: false,
    token: null,
    checkIsUser: async (email) => {
        const user = await fetchFakeUser(email)
        set((state) => ({ ...state, user, isUser: !!user }))
    },
})

export default authSlice
