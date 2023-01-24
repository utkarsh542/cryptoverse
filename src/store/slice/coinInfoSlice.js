import { createSlice } from "@reduxjs/toolkit";
import { fetchCoinInfo } from "../thunks/fetchCoinInfo";

const coinInfoSlice = createSlice({
    name:'cryptoInfo',
    initialState:{
       coinInfo:{},
        isLoading:false,
        error:null
    },
    extraReducers(builder) {
        builder.addCase(fetchCoinInfo.pending, (state, action) => {
            state.isLoading = true;
          });
          builder.addCase(fetchCoinInfo.fulfilled, (state, action) => {
            state.isLoading = false;
            state.coinInfo = action.payload;
          });
          builder.addCase(fetchCoinInfo.rejected, (state, action) => {
            state.isLoading = false;
            state.error = action.error;
          });
    }
})
export const coinsInfoReducer = coinInfoSlice.reducer