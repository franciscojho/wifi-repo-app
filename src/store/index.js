import { devtools } from "zustand/middleware"
import create from "zustand"

import authSlice from "./slices/auth"
import toggleSlice from "./slices/toggle"

const useStore = create(
    devtools((set, get) => ({
        ...authSlice(set, get),
        ...toggleSlice(set, get),
    }))
)

export default useStore
