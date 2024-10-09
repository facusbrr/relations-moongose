import mongoose from "moongose";

const employeeSchema = new mongoose.Schema({
  nombre: {
    type: String,
    required: true,
  },
  correo_electronico: {
    type: String,
    required: true,
    unique: true,
  },
  contrasena: {
    type: String,
    required: true,
  },
});

const Employee = mongoose.model("Employee", employeeSchema);

export default Employee;
