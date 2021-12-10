import { configureStore } from '@reduxjs/toolkit'
import { TypedUseSelectorHook } from 'react-redux'
import { store } from './store';
import { Provider } from 'react';
import { baseSlice } from './baseSlice';

export const store = configureStore({
  reducer: {
    base: baseSliceReducer,
  }
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
export const 
export const useStoreDispatch = () => useDispatch<AppDispatch>();
