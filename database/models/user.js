import mongoose from "mongoose";
const userScheme = new mongoose.Schema({
    Name:{type:String, require:true},
    Email:{type:String, require:true},
    PhoneNumber:{type:Number, require:true},
    Password:{type:String, require:true},
},{timestamps:true});

const Accounts =  mongoose.models.Accounts || mongoose.model("Accounts",userScheme);

export default Accounts;