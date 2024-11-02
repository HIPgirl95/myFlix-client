import { configureStore } from "@reduxjs/toolkit";
import { moviesSlice } from "./reducers/movies";

export const store = configureStore({ reducer: { movies: moviesSlice } });
