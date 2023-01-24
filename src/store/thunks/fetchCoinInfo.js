import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";



const fetchCoinInfo = createAsyncThunk("coins/fetch", async ({params}) => {
 
  const response = await axios.get(
    `https://api.coingecko.com/api/v3/coins/${params.coinId}`
  );

  return response.data
});

export {fetchCoinInfo}
