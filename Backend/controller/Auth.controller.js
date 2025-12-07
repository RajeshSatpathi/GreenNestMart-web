import { User } from "../models/User.model.js";
import validator from "validator"
import bcrypt from "bcryptjs";
import { generateToken } from "../config/token.js";

// registration api code 
export const registrationAPI = async (req, res) => {
    try {
        const { name, email, password } = req.body;
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            res.status(400).json({ success: false, message: "User already existing Please login.." })
        }
        if (!validator.isEmail(email)) {
            res.status(400).json({ success: false, message: "Enter valid Email Address" })

        }
        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = await User.create({
            name,
            email,
            password: hashedPassword,
        });
        //generating token and send cookie
        const token = generateToken(newUser._id);
        res.cookie("token", token, {
            httpOnly: true,
            sameSite: "strict",
            maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days
        });
        res.status(201).json({success:true, message: "User Registration successfull", user: newUser });
    } catch (error) {
        res.status(500).json({ error: error.message, message: "Server error Registration faild" });
    }
}

//login api code 


export const loginAPI = async (req, res) => {
    try {


        const { email, password } = req.body;
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(400).json({ message: "user not found in the DB" })
        }
        const isMatch = await bcrypt.compare(password, user.password);
        if (isMatch == false) {
            return res.status(400).json({ message: "incorrect password" })

        }
        //generating token and send cookie
        const token = generateToken(user._id);
        res.cookie("token", token, {
            httpOnly: true,
            // secure: process.env.NODE_ENV === "production",
            sameSite: "none",
            maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days
        });
        //response to front end 
        return res.status(201).json({
            success: true,
            message:"Login Succesfull",
            user: {
                id: user._id,
                name: user.name,
                email: user.email,
                role: user.role,

            },
        });
    } catch (error) {
        console.error("login error:", error);
        return res.status(500).json({
             message: "Internal server error" 
            });
    }
}

//logout api code 
export const logoutAPI = async (req, res) => {
    try {
        res.cookie("token", "", {
            httpOnly: true,
            sameSite: "none",
            expires: new Date(0),  // Immediately expire the cookie
        });

        return res.status(200).json({
            success: true,
            message: "Logout successful",
        });
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Logout failed",
            error: error.message,
        });
    }
};