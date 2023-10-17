
import connectDb from "../../../../database/middleware/connectdb";
import { NextResponse } from "next/server";
import Product from "../../../../database/models/products";
import mongoose from "mongoose";
export async function GET(){
    await connectDb();          
    let Products = await Product.find()
    return NextResponse.json({Products})
}   

