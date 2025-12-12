import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";


const APIBase_url = "http://localhost:8000"
// add  product api call 
export const PlaceOrderAPICALL = createAsyncThunk(
    "order/placeorders",
    async ({ address, paymentType }, { rejectWithValue }) => {
        try {
            const response = await axios.post(`${APIBase_url}/api/orders/placeorders`,
                { address, paymentType }, {
                withCredentials: true,
            });
            return response.data; // contains token, user, etc.
        } catch (error) {
            return rejectWithValue(error.response?.data || "Something went wrong");
        }
    }
);

export const PlaceOrderByStripeAPICALL = createAsyncThunk(
    "order/placeordersByStripe",
    async ({ address, paymentType }, { rejectWithValue }) => {
        try {
            const response = await axios.post(`${APIBase_url}/api/orders/placeordersByStripe`,
                { address, paymentType }, {
                withCredentials: true,
            });
            return response.data; // contains token, user, etc.
        } catch (error) {
            return rejectWithValue(error.response?.data || "Something went wrong");
        }
    }
);

//get product api call
export const GetAllOrdersAPICALL = createAsyncThunk(
    "orders/allorders",
    async (_, { rejectWithValue }) => {
        try {
            const res = await axios.get(
                `${APIBase_url}/api/orders/allorders`,
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
export const GetOrderByUserIdAPICALL = createAsyncThunk(
    "orders/order",
    async (_, { rejectWithValue }) => {
        try {
            const res = await axios.get(
                `${APIBase_url}/api/orders/order`,
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
export const changeOrderStatusByAdmin = createAsyncThunk(
    "orders/changeOrderStatus",
    async ({ status, id }, { rejectWithValue }) => {
        try {
            const response = await axios.put(`${APIBase_url}/api/orders/changeOrderStatus/${id}`,
                { status }, {
                withCredentials: true,
            });
            return response.data;
        } catch (error) {
            return rejectWithValue(error.response?.data || "Something went wrong");
        }
    }
)


//initialState::::::::
const initialState = {
    orders: [],
    loading: false,
    error: false,
    stripeUrl: null,   // store Stripe checkout URL
    orderId: null,     // store order ID
};
const OrderSlice = createSlice({
    name: "orders",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        // place order case
        builder
            .addCase(PlaceOrderAPICALL.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(PlaceOrderAPICALL.fulfilled, (state, action) => {
                state.loading = false;
                state.orders = action.payload.orders; // store only cart
            })
            .addCase(PlaceOrderAPICALL.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            });
        // place order case by Stripe PaymentGate way
        builder
            .addCase(PlaceOrderByStripeAPICALL.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(PlaceOrderByStripeAPICALL.fulfilled, (state, action) => {
                state.loading = false;
                state.orderId = action.payload.orderId;     // save order ID
                state.stripeUrl = action.payload.url;       // save Stripe checkout URL
            })
            .addCase(PlaceOrderByStripeAPICALL.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            });
        // GET all orders case
        builder
            .addCase(GetAllOrdersAPICALL.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(GetAllOrdersAPICALL.fulfilled, (state, action) => {
                state.loading = false;
                state.orders = action.payload.orders; // store only cart
            })
            .addCase(GetAllOrdersAPICALL.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            });
        // GET  orders by a single user case
        builder
            .addCase(GetOrderByUserIdAPICALL.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(GetOrderByUserIdAPICALL.fulfilled, (state, action) => {
                state.loading = false;
                state.orders = action.payload.orders; // store only cart
            })
            .addCase(GetOrderByUserIdAPICALL.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            });
        //update order status by admin
        builder
            .addCase(changeOrderStatusByAdmin.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(changeOrderStatusByAdmin.fulfilled, (state, action) => {
                state.loading = false;
                state.orders = action.payload.orders; // store only cart
            })
            .addCase(changeOrderStatusByAdmin.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            });
    }
})
export default OrderSlice.reducer;
