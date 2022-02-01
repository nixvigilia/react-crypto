import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// STEP 3 to REDUX
// create a specific API that gonna be used to fetch api data and export the query -> store/store.js
const cryptoNewsHeaders = {
  "x-bingapis-sdk": "true",
  "x-rapidapi-host": "bing-news-search1.p.rapidapi.com",
  "x-rapidapi-key": process.env.REACT_APP_RAPIDAPI_KEY,
};

// create request that accepts url and returns an object that contains url and headers
const createRequest = (url) => ({ url, headers: cryptoNewsHeaders });

export const cryptoNewsApi = createApi({
  reducerPath: "cryptoNewsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.REACT_APP_BING_NEWS_URL,
  }),
  endpoints: (builder) => ({
    getCryptoNews: builder.query({
      // `` = template string
      query: ({ newsCategory, count }) =>
        createRequest(
          `/news/search?q=${newsCategory}&safeSearch=Off&textFormat=Raw&freshness=Day&count=${count}`
        ),
    }),
  }),
});

export const { useGetCryptoNewsQuery } = cryptoNewsApi;
