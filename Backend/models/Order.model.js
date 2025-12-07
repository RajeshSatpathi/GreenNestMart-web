import mongoose from "mongoose";


const orderSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    addressId: { type: mongoose.Schema.Types.ObjectId, ref: "Address", required: true },
    items: [
        {
            product: {
                type: mongoose.Schema.Types.ObjectId,
                ref: "Product",
                required: true
            },
            quantity: {
                type: Number,
                required: true,

            }
        }
    ],
    totalAmount: { type: Number, required: true },
    paymentType: { type: String, enum: ["COD", "ONLINE"], required: true },
    status: { type: String, default: "PENDING" },
})
export const Orders = mongoose.model("Orders", orderSchema);
