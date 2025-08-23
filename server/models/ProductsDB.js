import mongoose from "mongoose";

const ProductSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },

  description: {
    type: String,
    required: true,
  },

  price: {
    type: Number,
    required: true,
  },

  brand: {
    type: String,
    trim: true,
  },

  category: {
    type: String,
    required: true,
    trim: true,
  },

  // Multiple product images
  images: [{
    type: String,
  }],

  // Optional: size/variant options
  variants: [{
    size: { type: String },
    color: { type: String },
    stock: { type: Number, default: 0 }
  }],

  // General stock (if no variants)
  stock: {
    type: Number,
    default: 0
  },

  // Ratings & reviews (basic)
  rating: {
    type: Number,
    default: 0,
    min: 0,
    max: 5
  },

  reviews: [{
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    comment: { type: String },
    rating: { type: Number, min: 0, max: 5 },
    createdAt: { type: Date, default: Date.now }
  }],

  // Extra metadata
  isFeatured: { type: Boolean, default: false },
  createdAt: { type: Date, default: Date.now }
});

const ProductModel = mongoose.model("Product", ProductSchema);
export default ProductModel;
