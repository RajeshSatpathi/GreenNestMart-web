import mongoose from "mongoose"

const ProductSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    desc: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    originalprice: {
        type: Number,
        required: true
    },
    currentprice: {
        type: Number,
        required: true
    },
    images: {
        type: [String],   // array of URLs
        required: true
    },
    rating: {
        type: [Number],
        default: []
    },
    bestseller: {
        type: Boolean,
        default: false
    },
    netweight:{
        type:String,
        required:true
    }

})
export const Product = mongoose.model("Product", ProductSchema);
