import { configureStore } from "@reduxjs/toolkit";
import cryptoCard from "./CardSlicer";

const store = configureStore({
  reducer: {
    cryptoCard: cryptoCard,
  },
});

export default store;