import mongoose from "mongoose";

const auditorioSchema = new mongoose.Schema({
  nombre: { type: String, required: true, unique : true},
  capacidad: { type: Number, required: true },
  ubicacion: { type: String, required: true }
});

export default mongoose.model("Auditorio", auditorioSchema);;