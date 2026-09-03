import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";


const connect_DB = async ()=>{
    try {
        const connectionInstance = await mongoose.connect
        (`${process.env.MONGODB_URL}/{DB_NAME}`)
        console.log(`\n MongoDB connexted !! DB HOST: $
            {connectionInstance.connection.host}`);
    } catch (error) {
        console.log("MONGO_DB connection FAILED",error);
    }
}

export default connect_DB                                                                              

