// require('dotenv').config({path: '/.env'})
import dotenv from "dotenv"
import connect_DB from "./db/index.js";

dotenv.config({
    path: './env'
})

connect_DB()






/*

import mongoose from "mongoose";
import { DB_NAME } from "./constants.js";
import express from "express";

const app = express();

(async () => {
    try {
        await mongoose.connect(
            `${process.env.MONGODB_URL}/${DB_NAME}`
        );

        app.on("error", (error) => {
            console.log("ERRR:", error);
            throw error;
        });

        app.listen(process.env.PORT, () => {
            console.log(
                `App is listening on port ${process.env.PORT}`
            );
        });

    } catch (error) {
        console.log("Error:", error);
    }
})();

*/