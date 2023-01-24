import { configureStore } from "@reduxjs/toolkit";
import { coinsReducer } from "./slice/coinSlice";
import { coinsInfoReducer } from "./slice/coinInfoSlice";


export const store = configureStore({
    reducer:{
        crypto: coinsReducer,
        cryptoInfo:coinsInfoReducer
    }
})

export * from './thunks/fetchCoins'
export * from './thunks/fetchCoinInfo'
