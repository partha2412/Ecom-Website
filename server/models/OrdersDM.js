import mongoose from 'mongoose'
const OrderSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  products: [{
    product: { type: mongoose.Schema.Types.ObjectId, ref: "Product" },
    quantity: { type: Number, default: 1 }
  }],
  status: { 
    type: String, 
    enum: ["pending", "shipped", "out for delivery", "delivered", "cancelled"], 
    default: "pending" 
  },
  totalPrice: { type: Number, required: true },
  createdAt: { type: Date, default: Date.now }
});

const OrderModel = mongoose.model("Order", OrderSchema);
export default OrderModel;
