import { configureStore  } from "@reduxjs/toolkit";
import { setupListeners } from '@reduxjs/toolkit/query'
import {shipsApi} from "../api/shipsApi";
import starshipsReducer  from "../features/starshipsSlice"

export const store = configureStore ({
    reducer:{
        starships: starshipsReducer
        ,
        [shipsApi.reducerPath]: shipsApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(shipsApi.middleware),
});

//setupListeners(store.dispatch)