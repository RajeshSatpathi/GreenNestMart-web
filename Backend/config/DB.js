import mongoose from "mongoose";
export const DatabaseConnection = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI)
        console.log("EN_MART_DB Connected...")

    } catch (error) {
        console.log("DB Connection Failed...")

    }
}