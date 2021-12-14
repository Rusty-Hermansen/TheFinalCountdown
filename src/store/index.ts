import { configureStore } from '@reduxjs/toolkit'
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
import  baseSliceReducer  from './baseSlice';


export const store = configureStore({
  reducer: {
    base: baseSliceReducer,
  }
})


export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export const useStoreDispatch = () => useDispatch<AppDispatch>();
