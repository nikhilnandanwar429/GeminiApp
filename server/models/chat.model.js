import mongoose from "mongoose";

const ChatSchema = new mongoose.Schema({
    chat: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now,
        expires: 604800 // in seconds (7 * 24 * 60 * 60)
    }

})



const Chat = mongoose.model("Chat", ChatSchema);
export default Chat;