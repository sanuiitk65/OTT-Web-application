import mongoose from "mongoose";


const ListSchema = new mongoose.Schema(
  {
    title : { type: String, required: true, unique: true },
    type : { type: String},
    genre : { type: String},
    content : {type:Array}
    
  },
  { timestamps: true }
);

export default ListSchema;
//module.exports = mongoose.model("List",ListSchema); // do we need exports instead of export