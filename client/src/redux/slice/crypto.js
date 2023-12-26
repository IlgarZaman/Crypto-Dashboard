// slice/crypto.js
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getCryptoData } from "../api";

export const allCrypto = createAsyncThunk("crypto/allCrypto", async () => {
  try {
    const response = await getCryptoData();
    return response.data;
  } catch (error) {
    throw error;
  }
});

const cryptoSlice = createSlice({
  name: "crypto",
  initialState: {
    error: "",
    loading: false,
    cryptoData: [],
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(allCrypto.pending, (state) => {
        state.loading = true;
      })
      .addCase(allCrypto.fulfilled, (state, action) => {
        state.loading = false;
        state.cryptoData = action.payload.data;
      })
      .addCase(allCrypto.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export const selectCryptoData = (state) => state.crypto.cryptoData;

export default cryptoSlice.reducer;
