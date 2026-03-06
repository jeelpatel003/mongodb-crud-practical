const mongoose = require("mongoose");

console.log("Program Started");

// Connect MongoDB
mongoose.connect("mongodb://127.0.0.1:27017/ecommerceDB")
.then(() => console.log("MongoDB Connected"))
.catch(err => console.log(err));


// Product Schema
const productSchema = new mongoose.Schema({
  name: String,
  price: Number,
  category: String,
  stock: Number
});

// User Schema
const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String
});

// Order Schema
const orderSchema = new mongoose.Schema({
  userId: String,
  product: String,
  quantity: Number,
  totalPrice: Number
});

// Cart Schema
const cartSchema = new mongoose.Schema({
  userId: String,
  products: Array
});


// Models
const Product = mongoose.model("Product", productSchema);
const User = mongoose.model("User", userSchema);
const Order = mongoose.model("Order", orderSchema);
const Cart = mongoose.model("Cart", cartSchema);


// CRUD Operations
async function runCRUD() {

  // CREATE
  const product = new Product({
    name: "Laptop",
    price: 70000,
    category: "Electronics",
    stock: 5
  });

  await product.save();
  console.log("Product Inserted");


  // READ
  const products = await Product.find();
  console.log("All Products:", products);


  // UPDATE
  await Product.updateOne(
    { name: "Laptop" },
    { price: 65000 }
  );

  console.log("Product Updated");


  // DELETE
  await Product.deleteOne({ name: "Laptop" });

  console.log("Product Deleted");

}

runCRUD();