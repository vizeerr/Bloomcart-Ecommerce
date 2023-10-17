
import connectDb from "../../../../database/middleware/connectdb";
import { NextResponse } from "next/server"; 
import Product from "../../../../database/models/products";
export async function POST(req){
    try{
        await connectDb();
        const body = await req.json();
        await Product.create(body)
        console.log("Data insertion completed.");   
        
        return  NextResponse.json({
            message:"Connect an post"
        },{
            status:200
        })

    }catch(e){
        console.log(e);
        return  NextResponse.json({
            message:"ERROR NOT C "
        },{
            status:500
        })
    }
}