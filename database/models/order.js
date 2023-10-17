const mongoose = require('mongoose');

const orderScheme = new mongoose.Schema({
    userID: {type:String, required:true},
    products:[{
        productId:{type:String},
        quantity:{type:Number,default:1}
    }],
    address:{type:String,required:true},
    amount:{type:Number,required:true},
    status:{type:String,default:'Pending',required:true},
},{timestamps:true});
mongoose.model={}
export default mongoose.model("Order",orderScheme);