import mongoose from "mongoose";


const addressSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    city: { type: String, required: true },
    state: { type: String, required: true },
    country: { type: String, required: true },
    pincode: { type: Number, required: true },
    mobno: { type: Number, required: true },
})
export const Address = mongoose.model("Address", addressSchema);
