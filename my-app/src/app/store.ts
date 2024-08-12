import { configureStore } from "@reduxjs/toolkit";
import { quotesApi } from "../services/quotesApi";
import counterReducer from '../features/counter/counterSlice'
import { getDefaultNormalizer } from "@testing-library/dom";

export const store = configureStore({
    reducer: {
        counter: counterReducer,
        [quotesApi.reducerPath]: quotesApi.reducer
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(quotesApi.middleware),
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>

// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch