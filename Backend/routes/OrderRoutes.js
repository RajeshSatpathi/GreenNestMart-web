import express from "express"

import { verifyUser } from "../middleware/AuthMiddleware.js";
import { getOrdersAPI, getOrdersByIdAPI, PlacedOrders } from "../controller/Order.controller.js";

export const OrderRoutes = express.Router();
OrderRoutes.post("/placeorders",verifyUser,PlacedOrders)
OrderRoutes.get("/allorders",verifyUser,getOrdersAPI)
OrderRoutes.get("/order",verifyUser,getOrdersByIdAPI)

