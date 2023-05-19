import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const baseQuery = fetchBaseQuery({
    baseUrl: 'https://api.jikan.moe/v4/'
});

export const apiSlice = createApi({
    reducerPath: 'apiSlice',
    baseQuery,
    endpoints: (builder) => ({})
});
