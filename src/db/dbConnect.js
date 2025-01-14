import mongoose from "mongoose";

const dbConnect = async () => {
    try {
        const response = await mongoose.connect(`${import.meta.env.VITE_MONGO_URL}`)
        console.log("DB Connect SUccessful : ", response.connection.host);

    } catch (error) {
        console.log("ERROR in CONNECTDB", error);
        process.exit(1);
    }

}

export default dbConnect;
