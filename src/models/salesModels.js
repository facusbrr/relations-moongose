import mongoose from "mongoose";

const salesSchema = new mongoose.Schema({
  fecha: { type: Date, default: Date.now },
  cantidad: { type: Number, required: true },
  monto: { type: Number, required: true },
  descripcion: { type: String },
  employees_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Employee",
    required: true,
  },
  products_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Product",
    required: true,
  },
});

const Sale = mongoose.model("Sale", salesSchema);

export default Sale;
