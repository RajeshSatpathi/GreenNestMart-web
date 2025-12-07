import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const API_URL = "http://localhost:8000";
// add  product api call 

export const addProductAPI = createAsyncThunk(
    "products/addproduct",
    async (productData, { rejectWithValue }) => {
        try {
            const res = await axios.post(
                `${API_URL}/api/product/addproduct`,
                productData,
                {
                    headers: {
                        "Content-Type": "multipart/form-data"
                    }
                }
            );
            return res.data

        } catch (err) {
            return rejectWithValue(err.response?.data || "Something went wrong");

        }
    }
)

//get product api call
export const GetProductAPI = createAsyncThunk(
    "products/getproduct",
    async (_, { rejectWithValue }) => {
        try {
            const res = await axios.get(
                `${API_URL}/api/product/`,
                {
                    withCredentials: true
                }
            );
            return res.data

        } catch (err) {
            return rejectWithValue(err.response?.data || "Something went wrong");

        }
    }
)


//initialState::::::::
const initialState = {
    product: [],
    loading: false,
    error: false
};
const productSlice = createSlice({
    name: "product",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        // add product case
        builder
            .addCase(addProductAPI.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(addProductAPI.fulfilled, (state, action) => {
                state.loading = false;
               state.product = action.payload;
            })
            .addCase(addProductAPI.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            });
        // GET product case
        builder
            .addCase(GetProductAPI.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(GetProductAPI.fulfilled, (state, action) => {
                state.loading = false;
                state.product = action.payload;
            })
            .addCase(GetProductAPI.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            });
    }
})
export default productSlice.reducer;
