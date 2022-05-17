import { devtools } from "zustand/middleware"
import create from "zustand"

import alertSlice from "./slices/alert"

const useStore = create(
    devtools((set, get) => ({
        ...alertSlice(set, get),
    }))
)

export default useStore
