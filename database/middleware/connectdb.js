const mongoose = require('mongoose')

// const connectDb = handler => async (req,res) =>{
//     if(mongoose.connections[0].readyState){
//         return handler;
//     }
//     await mongoose.connect(process.env.DB_URL)
//     return handler(req,res);
// }
// export default connectDb;

let isConnected = false;
const connectDb = async () =>{
    
    try {
        await mongoose.connect(process.env.DBURI)   
        .then(() => {console.log("Database connected!") 
        isConnected = true;})
        .catch(err => console.log(err));
        require("../models/products")
        require("../models/user")
    } catch (error) {
        console.log(error);
    }
}

export default connectDb;