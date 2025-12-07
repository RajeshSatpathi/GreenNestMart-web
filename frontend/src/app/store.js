import {configureStore} from "@reduxjs/toolkit"
import authSlice from "../Features/AuthFeature/authSlice.jsx"
import productSlice from "../Features/ProductFeature/productSlice.jsx"
import cartSlice from "../Features/CartFeatures/CartSlice.jsx"
import OrderSlice from "../Features/OrdersFeature/OrderSlice.jsx"

export const store = configureStore({
    reducer:{
        auth:authSlice,
        products:productSlice,
        cart:cartSlice,
        orders:OrderSlice,
    }
})