import { Router } from "express";
import { saveChatToDB } from "../controllers/saveChatToDB.js";
import { getChatFromDB } from "../controllers/getChatFromDB.js";

const router = Router();

router.get('/', saveChatToDB);
router.post("/:id", getChatFromDB);

export default router;