import { configureStore } from "@reduxjs/toolkit";
import { apiSlice } from "@/redux/slices/apiSlice";
import { favoritesReducer } from "@/redux/slices/favoritesSlice";
import { searchReducer } from "@/redux/slices/searchSlice";

export const store = configureStore({
  devTools: true,
  reducer: {
    favorites: favoritesReducer,
    search: searchReducer,
    [apiSlice.reducerPath]: apiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
