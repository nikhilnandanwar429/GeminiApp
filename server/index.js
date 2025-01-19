import express from "express";
import { configDotenv } from "dotenv";
import dbConfig from "./config/dbConfig.js";
import shareChat from "./routes/shareChat.js";
import cors from "cors";
configDotenv({
    path: "./.env"
})

const app = express();

app.use(express.json()); 
app.use(cors({
    origin: process.env.FRONTEND_URL, // Allow only this origin
    methods: 'GET,POST', // Allow these HTTP methods
    allowedHeaders: 'Content-Type,Authorization', // Allow these headers
}))

dbConfig();
app.get('/', (req,res) => {
    res.send("<h1>Hello</h1>")
})


app.use('/api', shareChat);

const port = process.env.PORT || 4000;
app.listen(port, () => {
    // console.log(`Server is running at http://localhost:${port}` );
    
})