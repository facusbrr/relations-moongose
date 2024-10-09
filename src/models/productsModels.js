import mongoose from "mongoose";

const productsSchema = new mongoose.Schema({
  nombre: {
    type: String,
    require: true,
  },
  descripcion: {
    type: String,
  },
  precio: {
    type: Number,
    require: true,
  },
  stock: {
    type: Number,
    require: true,
  },
});

const Product = new mongoose.model("Product", productsSchema);

export default Product;
