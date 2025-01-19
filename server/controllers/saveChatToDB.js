import Chat from "../models/chat.model.js";

const saveChatToDB = async (req, res) => {
    try {
        const { chat } = req.body;
        
        if (!chat) {
            return res.status(400).json({
                success: false,
                message: "Chat content is required"
            });
        }

        // console.log("Saving chat:", chat);

        const response = await Chat.create({
            chat
        });

        return res.status(201).json({
            success: true,
            message: "Successfully saved",
            data: {
                id: response._id,
                chat: response.chat
            }
        });

    } catch (error) {
        console.error("ERROR at saveChatToDB:", error);
        return res.status(500).json({
            success: false,
            message: "Cannot Share. Please try again",
            error: process.env.NODE_ENV === 'development' ? error.message : undefined
        });
    }
}

export { saveChatToDB };