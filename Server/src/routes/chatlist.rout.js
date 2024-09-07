import express from "express";
import chatlist from "../controllers/chatlist.controller.js";
import authMiddleware from "../middlewares/auth.middleware.js";

const router = express.Router();

router.route("/").get(authMiddleware, chatlist);

export default router;