import { configureStore } from "@reduxjs/toolkit";

// STEP 4 to REDUX
// import cryptoApi and put to reducer (STEP 1)
import { cryptoApi } from "../services/cryptoApi";
import { cryptoNewsApi } from "../services/cryptoNewsApi";

// REDUX STEPS
// STEP 1
// create a store.js -> index.js
export default configureStore({
  reducer: {
    [cryptoApi.reducerPath]: cryptoApi.reducer,
    [cryptoNewsApi.reducerPath]: cryptoNewsApi.reducer,
  },
});
