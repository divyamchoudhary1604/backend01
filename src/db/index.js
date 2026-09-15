import dns from "node:dns";
import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

// Use public DNS to resolve MongoDB Atlas SRV records reliably
dns.setServers(["8.8.8.8", "8.8.4.4"]);

const connect_DB = async () => {
    try {
        const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`);
        console.log(`\n MongoDB connected !! DB HOST: ${connectionInstance.connection.host}`);
    } catch (error) {
        console.log("MONGO_DB connection FAILED: ", error);
        process.exit(1);
    }
};

export default connect_DB;
