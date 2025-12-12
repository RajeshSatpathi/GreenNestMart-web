import express from "express"

import { verifyUser } from "../middleware/AuthMiddleware.js";
import {
    AdminUpdateOrderStatusAPI,
    getOrdersAPI, getOrdersByIdAPI,
    PlacedOrders, PlacedOrdersUsingStripe
} from "../controller/Order.controller.js";

export const OrderRoutes = express.Router();
OrderRoutes.post("/placeorders", verifyUser, PlacedOrders)
OrderRoutes.post("/placeordersByStripe", verifyUser, PlacedOrdersUsingStripe)

OrderRoutes.get("/allorders", verifyUser, getOrdersAPI)
OrderRoutes.get("/order", verifyUser, getOrdersByIdAPI)
OrderRoutes.put("/changeOrderStatus/:id", verifyUser, AdminUpdateOrderStatusAPI)


