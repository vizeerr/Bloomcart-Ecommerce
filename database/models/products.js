import mongoose from "mongoose";
const ProductSchema = new mongoose.Schema({
    title:{type:String, required:true},
    slug:{type:String, required:true},
    description:{type:String, required:true},
    image:{type:Array, required:true},
    category:{type:String, required:true},
    size:{type:Array, required:true},
    color:{type:Array, required:true},
    gender:{type:String, required:true},
    price:{type:Number, required:true},
    fabric:{type:String, required:true},
    occasion:{type:String, required:true},
    rating:{type:Number, required:true,default:0},
    views:{type:Number, required:true, default:0},
    quantity:{type:Number, required:true},
},{timestamps:true});

const Products = mongoose.models.Products || mongoose.model('Products', ProductSchema)
export default Products;