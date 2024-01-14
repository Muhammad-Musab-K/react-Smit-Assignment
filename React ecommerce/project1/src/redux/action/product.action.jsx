import { createAsyncThunk } from "@reduxjs/toolkit";


export const getAllData = createAsyncThunk('products', async () => {
    const response = await fetch("https://dummyjson.com/products")
    const result = response.json();
    return result;
})