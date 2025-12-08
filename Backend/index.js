import express from "express";
import dotenv from "dotenv"
import cookieParser from "cookie-parser";
import cors from "cors"
import { DatabaseConnection } from "./config/DB.js";
import { AppRoutes } from "./routes/AuthRoutes.js";
import { ProductRoutes } from "./routes/ProductRoutes.js";
import { CartRoutes } from "./routes/CartRoutes.js";
import { OrderRoutes } from "./routes/OrderRoutes.js";
dotenv.config();

// app use 
const app = express();
DatabaseConnection()
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.use(cors({
    origin: "https://green-nest-mart-web-5pup.vercel.app",
    credentials: true
}));
app.get("/",(req,res)=>{
  res.send("Server running...")
})
//routes 
app.use("/api/auth", AppRoutes);
app.use("/api/product", ProductRoutes);
app.use("/api/cart", CartRoutes);
app.use("/api/orders", OrderRoutes);




// port and connection 
const PORT = process.env.PORT || 3000
app.listen(PORT, async () => {
  console.log("Server running 8000")
})

  
   