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
    searchTerm: "",
    error: "",
    loading: false,
    cryptoData: [],
    initialData: [],
  },
  reducers: {
    searchProducts: (state, action) => {
      const searchTerm = action.payload.toLowerCase();
      state.searchTerm = searchTerm;
      if (searchTerm === "") {
        state.cryptoData = state.initialData;
      } else {
        state.cryptoData = state.initialData.filter((product) =>
          product.name.toLowerCase().includes(searchTerm)
        );
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(allCrypto.pending, (state) => {
        state.loading = true;
      })
      .addCase(allCrypto.fulfilled, (state, action) => {
        const alldata = action.payload.data;
        state.loading = false;
        state.cryptoData = alldata;
        state.initialData = alldata;
      })
      .addCase(allCrypto.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export const selectCryptoData = (state) => state.crypto.cryptoData;
export const selectSearchTerm = (state) => state.crypto.searchTerm;
export const { searchProducts } = cryptoSlice.actions;
export default cryptoSlice.reducer;
