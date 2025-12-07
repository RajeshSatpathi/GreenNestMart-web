import { Cart } from "../models/Cart.model.js";
import { Product } from "../models/Product.model.js"
//add to cart api
export const addtoCartAPI = async (req, res) => {
    try {
        const userId = req.user.id;
        const { productId, quantity } = req.body;


        if (!productId || !quantity || quantity <= 0) {
            return res.status(400).json({ message: "Invalid product or quantity" });
        }
        //check if product is existing or not 
        const existingProduct = await Product.findById(productId)
        if (!existingProduct) {
            return res.status(404).json({ message: "Product not found" });
        }
        // Find user's cart or create a new one
        let cart = await Cart.findOne({ user: userId });
        if (!cart) {
            cart = await Cart.create({
                user: userId,
                items: [{ product: productId, quantity }],
            });
            return res.status(201).json({
                message: "Item added to new cart",
                cart,
            });
        }
        // Check if product already exists in cart
        const itemIndex = cart.items.findIndex(
            (item) => item.product.toString() === productId
        );

        if (itemIndex > -1) {
            // Product exists in cart → increase quantity
            cart.items[itemIndex].quantity += quantity;
        } else {
            // Product not in cart → add new item
            cart.items.push({ product: productId, quantity });
        }
        await cart.save();
        return res.status(200).json({
            message: "Item added to cart",
            cart,
        });


    } catch (error) {
        console.log("error", error);
        return res.status(500).json({ message: "server error with status code 500" })
    }
}

//get from cart api 
export const getCartAPI = async (req, res) => {
    try {
        const userId = req.user.id;

        // Find cart and populate product details
        const cart = await Cart.findOne({ user: userId })
            .populate("items.product");

        if (!cart) {
            return res.status(404).json({ message: "Cart not found" });
        }

        return res.status(200).json({
            message: "Cart fetched successfully",
            cart
        });
    } catch (error) {
        console.log("error", error);
        return res.status(500).json({ message: "server error with status code 500" })
    }
}
//remove from cart api 