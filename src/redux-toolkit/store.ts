import { configureStore } from '@reduxjs/toolkit'
import { allReducer } from "./all-reducers"

export const store = configureStore({
    reducer: {
        ...allReducer
    },

})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch