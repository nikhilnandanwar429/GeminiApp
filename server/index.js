import express from "express";
import { configDotenv } from "dotenv";
import dbConfig from "./config/dbConfig.js";
configDotenv({
    path: "./.env"
})

const app = express();
dbConfig();
app.get('/', (req,res) => {
    res.send("<h1>Hello</h1>")
})


const port = process.env.PORT || 4000;
app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}` );
    
})