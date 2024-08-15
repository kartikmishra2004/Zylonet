import express from "express";
import { signup, login, userauth } from "../controllers/auth.controller.js";
import authMiddleware from "../middlewares/auth.middleware.js";

const router = express.Router();

router.route("/signup").post(signup);

router.route("/login").post(login);

router.route("/userauth").get(authMiddleware, userauth);

export default router;