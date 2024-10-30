import { configureStore } from "@reduxjs/toolkit";
import { setMovies } from "./reducers/movies";

export const store = configureStore({ reducer: { movies: setMovies } });
