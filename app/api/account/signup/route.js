
import connectDb from "../../../../database/middleware/connectdb";
import { NextResponse } from "next/server"; 
import Account from "../../../../database/models/user";
var CryptoJS = require("crypto-js");

export async function POST(req){
    try{
        await connectDb();
        const body = await req.json();
        const {Name,Email,PhoneNumber} = body;
        console.log("Body: "+ body);
        await Account.create({Name,Email,PhoneNumber,Password:CryptoJS.AES.encrypt(body.Password,'bloomcart').toString()});
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