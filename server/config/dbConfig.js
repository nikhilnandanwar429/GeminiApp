import mongoose from "mongoose";

const dbConfig = async() => {
    try {
        const response = await mongoose.connect(process.env.MONGO_URL)
        // console.log("DB connected Successfully");
        // console.log(response.connections);
        
        
    } catch (error) {
        // console.log("ERROR in DBConfig : ", error);
    }
}

export default dbConfig;