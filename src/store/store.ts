import {configureStore} from "@reduxjs/toolkit";
import {carsSlice} from "./cars/carsSlice";

export const store = configureStore({
    reducer: {
        cars: carsSlice.reducer
    }
})