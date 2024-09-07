import express from "express";
import chatlist from "../controllers/chatlist.controller.js";

const router = express.Router();

router.route("/").get(chatlist);

export default router;