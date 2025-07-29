// const { model, Schema } = require("mongoose");

// const productSchema = new Schema({});
// module.exports = model("Product", productSchema);

const { model, Schema } = require("mongoose");

const productSchema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  price: {
    type: Number,
    required: true,
  },
  stock: {
    type: Number,
    default: 0,
  },
  image: {
    type: String, // URL to image
  },
  category: {
    type: String,
  },
});
module.exports = model("Product", productSchema);
