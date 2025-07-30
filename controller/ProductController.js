const Product = require("../modals/Product");

const getAllProcucts = async (req, res, next) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (error) {
    console.log(error);
  }
};

const addNewProducts = async (req, res, next) => {
  try {
    const { name, price, stock, category, image } = req.body;

    const newProduct = new Product({
      name,
      price,
      stock,
      category,
      image,
    });

    await newProduct.save();

    res.send("Product added successfully!");
  } catch (error) {
    console.error(error);
    res.status(500).send("Error adding product.");
  }
};
module.exports = {
  getAllProcucts,
  addNewProducts,
};
