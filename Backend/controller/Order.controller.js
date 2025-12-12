import { Orders } from "../models/Order.model.js";
import { Product } from "../models/Product.model.js"
import { Address } from "../models/Address.model.js";
import { Cart } from "../models/Cart.model.js";
import stripe from "stripe";

//order placed api code 
export const PlacedOrders = async (req, res) => {
    try {
        const userId = req.user.id;
        const { address, paymentType } = req.body;
        if (!address) {
            return res.status(400).json({
                success: false,
                message: "Delivery Address Is Required"
            })
        }
        //save the address into address model
        const addressData = await Address.create({
            userId: userId,
            city: address.city,
            state: address.state,
            country: address.country,
            pincode: address.pincode,
            mobno: address.mobno
        })

        let cart = await Cart.findOne({ user: userId }).populate("items.product");
        if (!cart || cart.items.length === 0) {
            return res.status(400).json({
                success: false,
                message: "Your Cart Is Empty",
            });
        }
        //calculating totalamount 

        const totalAmount = cart?.items?.
            reduce((acc, item) => acc + item?.product?.currentprice * item?.quantity, 0);

        // create place order 
        const newOrderPlace = await Orders.create({
            userId: userId,
            addressId: addressData._id,
            items: cart?.items.map((item) => ({
                product: item.product._id,
                quantity: item.quantity
            })),
            totalAmount,
            paymentType
        })
        // Clear Cart
        await Cart.findOneAndUpdate(
            { user: userId },
            { items: [] },
            { new: true }
        );

        return res.status(201).json({
            success: true,
            message: "Order Placed Successfully",
            order: newOrderPlace,
        });

    } catch (error) {
        console.log("error", error);
        return res.status(500).json({
            success: false,
            message: "server side error in orderAPI"
        })
    }
}

//get order api for all order 
export const getOrdersAPI = async (req, res) => {
    try {
        const orders = await Orders.find()
            .populate("addressId").
            populate("items.product")
            .populate("userId")
            ;
        if (!orders || orders.length == 0) {
            return res.status(400).json({
                success: false,
                message: "No Orders Found",
            });
        }
        return res.status(201).json({
            success: true,
            message: "Order succesully Get",
            orders: orders
        });

    } catch (error) {
        console.log("error", error);
        return res.status(500).json({
            success: false,
            message: "server side error in GetorderAPI"
        })
    }
}

// get order for a particular user
export const getOrdersByIdAPI = async (req, res) => {
    try {
        const userId = req.user.id;
        const orders = await Orders.find({ userId })
            .populate("addressId").
            populate("items.product")
            .populate("userId")
            ;
        if (!orders || orders.length == 0) {
            return res.status(400).json({
                success: false,
                message: "No Orders Found",
            });
        }
        return res.status(201).json({
            success: true,
            message: "Order succesully Get",
            orders: orders
        });

    } catch (error) {
        console.log("error", error);
        return res.status(500).json({
            success: false,
            message: "server side error in GetorderAPI"
        })
    }
}

// update order status 
export const AdminUpdateOrderStatusAPI = async (req, res) => {
    try {
        const { id } = req.params;
        const { status } = req.body;

        const updatedOrder = await Orders.findOneAndUpdate(
            { _id: id },
            { status: status },
            { new: true }
        )
            .populate("addressId").
            populate("items.product")
            .populate("userId")
            ;
        if (!updatedOrder || updatedOrder.length == 0) {
            return res.status(400).json({
                success: false,
                message: "No Orders Found",
            });
        }
        return res.status(201).json({
            success: true,
            message: "Order updated succesully ",
            orders: updatedOrder
        });

    } catch (error) {
        console.log("error", error);
        return res.status(500).json({
            success: false,
            message: "server side error in UpdateorderAPI"
        })
    }
}

//place order using Stripe PaymentGateway ////////////////////////////
//order placed api code 
export const PlacedOrdersUsingStripe = async (req, res) => {
    try {
        const userId = req.user.id;
        const { address, paymentType } = req.body;
        if (!address) {
            return res.status(400).json({
                success: false,
                message: "Delivery Address Is Required"
            })
        }
        //save the address into address model
        const addressData = await Address.create({
            userId: userId,
            city: address.city,
            state: address.state,
            country: address.country,
            pincode: address.pincode,
            mobno: address.mobno
        })

        let cart = await Cart.findOne({ user: userId }).populate("items.product");
        if (!cart || cart.items.length === 0) {
            return res.status(400).json({
                success: false,
                message: "Your Cart Is Empty",
            });
        }
        //calculating totalamount 

        const totalAmount = cart?.items?.
            reduce((acc, item) => acc + item?.product?.currentprice * item?.quantity, 0);

        // create place order 
        const newOrderPlace = await Orders.create({
            userId: userId,
            addressId: addressData._id,
            items: cart?.items.map((item) => ({
                product: item.product._id,
                quantity: item.quantity
            })),
            totalAmount,
            paymentType
        })
        //stripe Payment Gateway
        const stripeInstance = new stripe(process.env.STRIPE_SECRET_KEY);

        const line_items = cart.items.map((item) => ({
            price_data: {
                currency: "usd",
                product_data: {
                    name: item.product.title,
                },
                unit_amount: Math.floor(item.product.currentprice * 0.012 * 100),
            },
            quantity: item.quantity,
        }));

        const session = await stripeInstance.checkout.sessions.create({
            line_items,
            mode: "payment",
            success_url: "http://localhost:5173/success",
            cancel_url: "http://localhost:5173/cancel",
            metadata: {
                orderId: newOrderPlace._id.toString(),
                userId: userId.toString(),
            }
        })
      // Clear Cart
        await Cart.findOneAndUpdate(
            { user: userId },
            { items: [] },
            { new: true }
        );

    
        return res.status(201).json({
            success: true,
            message: "Order Created. Redirecting to Stripe...",
            orderId: newOrderPlace._id,
            url: session.url,
        });

    } catch (error) {
        console.log("error", error);
        return res.status(500).json({
            success: false,
            message: "server side error in orderAPI"
        })
    }
}