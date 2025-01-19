import { Router } from "express";
import { saveChatToDB } from "../controllers/saveChatToDB.js";
import { getChatFromDB } from "../controllers/getChatFromDB.js";

const router = Router();

router.post('/', saveChatToDB);
router.get("/:id", getChatFromDB);

export default router;