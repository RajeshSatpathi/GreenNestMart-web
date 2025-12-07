import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const APIBase_url = "https://green-nest-mart-web-backend.vercel.app"
// add  product api call 

export const AddtoCartAPICALL = createAsyncThunk(
    "cart/addtocart",
    async ({ productId, quantity }, { rejectWithValue }) => {
        try {
            const response = await axios.post(`${APIBase_url}/api/cart/addtocart`,
                { productId, quantity }, {
                withCredentials: true,
            });
            return response.data; // contains token, user, etc.
        } catch (error) {
            return rejectWithValue(error.response?.data || "Something went wrong");
        }
    }
);

//get product api call
export const GetCartAPICALL = createAsyncThunk(
    "cart/getcart",
    async (_, { rejectWithValue }) => {
        try {
            const res = await axios.get(
                `${APIBase_url}/api/cart/get`,
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
    cart: [],
    loading: false,
    error: false
};
const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        // add product case
        builder
            .addCase(AddtoCartAPICALL.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(AddtoCartAPICALL.fulfilled, (state, action) => {
                state.loading = false;
                state.cart = action.payload.cart; // store only cart
            })
            .addCase(AddtoCartAPICALL.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            });
        // GET product case
        builder
            .addCase(GetCartAPICALL.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(GetCartAPICALL.fulfilled, (state, action) => {
                state.loading = false;
              state.cart = action.payload.cart; // store only cart
            })
            .addCase(GetCartAPICALL.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            });
    }
})
export default cartSlice.reducer;
