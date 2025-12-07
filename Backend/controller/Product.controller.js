import { Product } from "../models/Product.model.js";

export const AddProductAPI = async (req, res) => {
    try {
        const {
            title,
            desc,
            category,
            originalprice,
            currentprice,
            bestseller,
            netweight
        } = req.body;
        const images = req.files.map((file) => file.path); // Cloudinary URLs 
        const newProduct = new Product({
            title,
            desc,
            category,
            originalprice,
            currentprice,
            bestseller,
            netweight,
            images,
        });

        await newProduct.save();

       return res.status(201).json({
            success: true,
            message: "Product created successfully",
            product: newProduct,
        });
    } catch (error) {
        console.log(error)
        res.status(500).json({ error: error.message });
    }
}
//get all product 

export const GetProductAPI = async (req, res) => {
    try {
        const products = await Product.find();

        res.status(200).json({
            success: true,
            count: products.length,
            products,
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: error.message });
    }
}