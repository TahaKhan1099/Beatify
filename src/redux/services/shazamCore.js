import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const shazamCoreApi = createApi({
    reducerPath: 'shazamCoreApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://shazam-core7.p.rapidapi.com',
        prepareHeaders: (headers) => {
            headers.set('X-RapidAPI-Key', 'd4de512f5fmsh7710e6b8546c512p13a49djsn6905f9abb3d8');

            return headers;
        },
    }),
    endpoints: (builder) => ({
        getTopCharts : builder.query({query: () => '/charts/get-top-songs-in-world'}) //redux allows us to call this(endpoint) as a Hook
    })
  });

  export const {
    useGetTopChartsQuery,
  } = shazamCoreApi;