// models/Order.js

const { Schema, model } = require("mongoose");

const orderSchema = new Schema({
  userId: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
  items: [
    {
      productId: {
        type: Schema.Types.ObjectId,
        ref: "Product",
      },
      quantity: Number,
      priceAtPurchase: Number, // price when order was made
    },
  ],
  total: {
    type: Number,
    required: true,
  },
  status: {
    type: String,
    default: "pending", // pending, confirmed, cancelled, delivered
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = model("Order", orderSchema);
