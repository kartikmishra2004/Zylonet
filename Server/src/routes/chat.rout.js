import express from "express";
import chat from "../controllers/chat.coltroller.js";

const router = express.Router();

router.route("/:roomName").get(chat)

export default router;