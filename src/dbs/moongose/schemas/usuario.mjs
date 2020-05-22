import mongoose from 'mongoose';
const Schema = mongoose.Schema;

let usuarioSchema = new Schema({
    
  email: {
    type: Schema.Types.String,
     required: true
    },
  

}, {collection: 'usuarios'});

export default mongoose.model('Usuario', usuarioSchema);

console.log();