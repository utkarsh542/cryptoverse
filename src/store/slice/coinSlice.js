import { createSlice } from "@reduxjs/toolkit";
import { fetchCoins } from "../thunks/fetchCoins";

const coinSlice = createSlice({
    name:'crypto',
    initialState:{
      cryptocoins:[],
        isLoading:false,
        error:null
    },
    extraReducers(builder) {
        builder.addCase(fetchCoins.pending, (state, action) => {
          state.isLoading = true;
        });
        builder.addCase(fetchCoins.fulfilled, (state, action) => {
          state.isLoading = false;
          state.cryptocoins = action.payload;
         
          
        });
        builder.addCase(fetchCoins.rejected, (state, action) => {
          state.isLoading = false;
          state.error = action.error;
        });
    }
})
    
export const coinsReducer = coinSlice.reducer