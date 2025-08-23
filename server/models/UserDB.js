import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    f_name: { type: String, required: true },
    l_name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    phone_no: { type: String },
    dob: { type: Date },
    address: { type: String },
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
