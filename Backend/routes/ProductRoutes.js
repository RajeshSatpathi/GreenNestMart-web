import express from "express"
import upload from "../middleware/Upload.js";
import { AddProductAPI, GetProductAPI } from "../controller/Product.controller.js";

export const ProductRoutes = express.Router();
ProductRoutes.post("/addproduct",upload.array("images",3),AddProductAPI)
ProductRoutes.get("/",GetProductAPI)
