import { devtools, persist } from "zustand/middleware"
import create from "zustand"

import alertSlice from "./slices/alert"
import googleMarkerSlice from "./slices/googleMarker"

const useStore = create(
    devtools(
        persist((set, get) => ({
            ...alertSlice(set, get),
            ...googleMarkerSlice(set, get),
        }))
    )
)

export default useStore
