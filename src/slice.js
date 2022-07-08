import {configureStore} from "@reduxjs/toolkit"
import filterReducers from "./filtersSlice"
const reducer = {
    filters:filterReducers
}
const store = configureStore({
    reducer:reducer
})

export default store