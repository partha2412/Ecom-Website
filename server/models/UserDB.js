import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    phone_no: { type: String, default:"" },
    dob: { type: Date, default:"" },
    address: { type: String, default:"" },
    password: { type: String, required: true },

    // Wishlist as array of product IDs
    wishlist: [{ type: mongoose.Schema.Types.ObjectId, ref: "Product" }],

    // Orders as array of order references
    orders: [{ type: mongoose.Schema.Types.ObjectId, ref: "Order" }],

    // Join date
    joinDate: { type: Date, default: Date.now }
});

const UserModel = mongoose.model("User", UserSchema);
export default UserModel;
