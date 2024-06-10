import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const shipsApi = createApi({
  reducerPath: "shipsApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://swapi.dev/api" }),
  endpoints: (builder) => ({
    getStarships: builder.query({
      query: (page = 1) => `/starships/?page=${page}`,
    }),
    getStarshipDetails: builder.query({
      query: (id) => `/starships/${id}/`,
    }),
    getPilotDetails: builder.query({
        query: (id) => `/people/${id}/`,
      }),
    
  }),
});

export const { useGetStarshipsQuery, useGetStarshipDetailsQuery,useGetPilotDetailsQuery } = shipsApi;
