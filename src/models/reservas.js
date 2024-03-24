import mongoose, { mongo } from "mongoose";

const reservaSchema = new mongoose.Schema({
    _id : mongoose.Schema.Types.ObjectId,
    codigo : { type : String, require : true, unique : true },
    descripcion : { type : String },
    conferencista : {
        type : mongoose.Schema.Types.String,
        ref : 'Conferencista',
        require : true
    },
    cedula : {
        type : mongoose.Schema.Types.Number,
        ref : 'Conferencista',
        require : true
    },
    auditorio : {
        type : mongoose.Schema.Types.String,
        ref : 'Auditorio',
        require : true
    },
    capacidad : {
        type : mongoose.Schema.Types.Number,
        ref : 'Auditorio',
        require : true
    },
    fecha : { type : Date , require : true}
})

export default mongoose.model('Reserva', reservaSchema)