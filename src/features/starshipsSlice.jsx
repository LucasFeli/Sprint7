import { createSlice } from "@reduxjs/toolkit";
import {shipsApi} from "../api/shipsApi";

const starshipsSlice = createSlice({
    name: 'starships',
    initialState: {
        starships:[],
        page:1,
        totalPages:0,
        loading:false,
        error: null
    },
    reducers: {
        setPage:(state,action) => {
            state.page = action.payload
        },
        
    },
    extraReducers: (builder) => {
        builder
          .addMatcher(shipsApi.endpoints.getStarships.matchPending, (state) => {
            state.loading = true;
          })
          .addMatcher(shipsApi.endpoints.getStarships.matchFulfilled, (state, action) => {
            state.loading = false;
            state.starships = action.payload.results;
            state.totalPages = Math.ceil(action.payload.count / 10); 
          })
          .addMatcher(shipsApi.endpoints.getStarships.matchRejected, (state, action) => {
            state.loading = false;
            state.error = action.error.message;
          });
      },
})

export const {setPage} = starshipsSlice.actions;
export default starshipsSlice.reducer;