import Chat from "../models/chat.model.js";

const saveChatToDB = async (req, res) => {
    try {
        const chat = req.body;
        console.log(chat);

        const response = await Chat.create({
            chat
        })

        return res.status(200).json({
            message: "Successfully saved ",
            response
        })

    } catch (error) {
        console.log("ERROR at saveChatToDB : ", error);
        return res.status(400).json({
            message: "Cannot Share. Please try again"
        })
    }
}

export { saveChatToDB };