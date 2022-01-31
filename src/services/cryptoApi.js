import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// STEP 3 to REDUX
// create a specific API that gonna be used to fetch api data and export the query -> store/store.js
const cryptoApiHeaders = {
  "x-rapidapi-host": "coinranking1.p.rapidapi.com",
  "x-rapidapi-key": "",
};

const params = {
  referenceCurrencyUuid: "yhjMzLPhuIDl",
  timePeriod: "24h",
  tiers: "1",
  orderBy: "marketCap",
  orderDirection: "desc",
  limit: "50",
  offset: "0",
};

const baseUrl = "https://coinranking1.p.rapidapi.com";

// create request that accepts url and returns an object that contains url and headers
const createRequest = (url) => ({ url, params, headers: cryptoApiHeaders });

export const cryptoApi = createApi({
  reducerPath: "cryptoApi",
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    getCryptos: builder.query({
      query: () => createRequest("/coins"),
    }),
  }),
});

export const {
  useGetCryptosQuery,
  // useGetCryptoDetailsQuery,
  // useGetExchangesQuery,
  // useGetCryptoHistoryQuery,
} = cryptoApi;
