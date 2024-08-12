import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
export const quotesApi = createApi({
    reducerPath: 'quotesApi',
    baseQuery: fetchBaseQuery({baseUrl: '/api'}),
    endpoints: (builder) => ({
        getQuote: builder.query({
            query: () => 'quote'
        })
    })
})

export const { useGetQuoteQuery } = quotesApi;

