import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config({
    path: "./.env"
})

const dbConnect = async () => {
    try {
        // console.log(import.meta.env.VITE_MONGO_URL);

        const res = await mongoose.connect(import.meta.env.VITE_MONGO_URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log("DB CONNECTED ");


        // const response = await mongoose.connect(`${import.meta.env.VITE_MONGO_URL}`)
        // console.log("DB Connect SUccessful : ", response.connection.host);

    } catch (error) {
        console.log("ERROR in CONNECTDB", error);
        
    }
}


export default dbConnect;
