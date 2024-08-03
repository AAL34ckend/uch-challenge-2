import { configureStore } from "@reduxjs/toolkit";
import contentReducer from "../reducers/slice"
import newsReducer from '../reducers/newsSlice'

export const store = configureStore({
    reducer: {
        content: contentReducer,
        news: newsReducer
    }
})

