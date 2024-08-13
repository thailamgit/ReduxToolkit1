import { configureStore } from "@reduxjs/toolkit";
import { quotesApi } from "../services/quotesApi";
import counterReducer from '../features/counter/counterSlice'
import arrayReducer from '../features/counter/arraySlice'
import todoReducer from '../features/todos/todoSlice'
export const store = configureStore({
    reducer: {
        todos: todoReducer,
        counter: counterReducer,
        array: arrayReducer,
        [quotesApi.reducerPath]: quotesApi.reducer
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(quotesApi.middleware),
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>

// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch

export default store