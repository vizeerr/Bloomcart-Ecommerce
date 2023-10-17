import connectDb from "../../../../database/middleware/connectdb";
import { NextResponse } from "next/server";
import Accounts from "../../../../database/models/user";
var CryptoJS = require("crypto-js");
var jwt = require('jsonwebtoken');

export async function POST(req) {
  try {

    await connectDb();
    if (!req.body) {
      return NextResponse.json({ success: "false" });
    }

    const body = await req.json();
    const user = await Accounts.findOne({ "Email":body.Email });
    if(user){
      var bytes  = CryptoJS.AES.decrypt(user.Password, 'bloomcart');
      var DecPassword = bytes.toString(CryptoJS.enc.Utf8);
      if ( DecPassword  === body.Password) {    
        var token = jwt.sign({ Email:user.Email,Name:user.Name }, 'bloomcart');
        return  NextResponse.json({
          message:"true",
          status:200,
          token
        })
    }
    return  NextResponse.json({
        message:"Password Or Email May Be Incorrect "
      },{
        status:500
      })
    }
  } catch (error) {
    console.error(error);
    return  NextResponse.json({
        message:"ERROR"
    },{
        status:500
    })
  }
}
