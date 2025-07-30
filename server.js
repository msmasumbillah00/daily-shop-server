const express = require("express");
const mongoose = require("mongoose");
const connectDB = require("./db");
const PORT = 3000;
const bodyParser = require("body-parser");

const {
  getAllProcucts,
  addNewProducts,
} = require("./controller/ProductController");

const app = express();

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
// connectDB("mongodb://127.0.0.1:27017/daily-shop")
connectDB(
  "mongodb+srv://msmasumbillah0000:mdstudentsmasumallclass@cluster0.pf0bweu.mongodb.net/daily-shop?retryWrites=true&w=majority&appName=Cluster0"
)
  .then(() => {
    console.log("Connected to MongoDB");
    console.log("Connected to DB:", mongoose.connection.name);
  })
  .catch((err) => console.error("❌ Connection error:", err));

app.get("/products", getAllProcucts);
app.post("/products/add", addNewProducts);
app.get("/", (req, res) => {
  res.json({ name: "MD MAsum Billah" });
});

app.listen(PORT, () => {
  console.log(`Server is running on portdd ${PORT}`);
});
