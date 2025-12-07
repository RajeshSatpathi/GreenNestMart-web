import express from "express"
import { loginAPI, logoutAPI, registrationAPI } from "../controller/Auth.controller.js";
import { verifyUser } from "../middleware/AuthMiddleware.js";

export const AppRoutes = express.Router();
AppRoutes.post("/registration", registrationAPI);
AppRoutes.post("/login", loginAPI);
AppRoutes.post("/logout", logoutAPI);
AppRoutes.get("/checkAuth",verifyUser, (req, res) => {
    res.json({ success: true,message:"Authorize User", user: req.user })
})

