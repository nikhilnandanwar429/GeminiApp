import mongoose from "mongoose";

const ChatSchema = new mongoose.Schema({
    chat:{
        type: String,
        required: true
    },
    createdAt: { type: Date, default: Date.now },

})

ChatSchema.index({ createdAt: 1 }, { expireAfterSeconds: 2592000 }); // 30 days in seconds


const Chat = mongoose.model("Chat", ChatSchema);
export default Chat;