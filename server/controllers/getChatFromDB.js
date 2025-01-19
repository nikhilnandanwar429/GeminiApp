import Chat from "../models/chat.model.js";

const getChatFromDB = async(req, res) => {
    try {
        const id = req.params.id;
        // console.log(id);

        const chat = await Chat.findById(id);
        if(!chat){
            return res.status(404).json({
                message: "No Chat Found. Please try again"
            })
        }
        return res.status(200).json({
            chat
        })
        
    } catch (error) {
        // console.log("ERROR at getDataFromDB : ", error);        
        return res.status(404).json({
            message: "Cannot get data"
        })
    }
}

export { getChatFromDB }