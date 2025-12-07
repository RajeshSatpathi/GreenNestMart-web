import express from "express"
import { addtoCartAPI, getCartAPI } from "../controller/Cart.controller.js";
import { verifyUser } from "../middleware/AuthMiddleware.js";

export const CartRoutes = express.Router();
CartRoutes.post("/addtocart",verifyUser,addtoCartAPI)
CartRoutes.get("/get",verifyUser,getCartAPI)
