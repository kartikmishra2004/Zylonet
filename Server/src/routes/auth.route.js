import express from "express";
import { signup } from "../controllers/auth.controller.js";
import { login } from "../controllers/auth.controller.js";

const router = express.Router();

router.route("/signup").post(signup);

router.route("/login").post(login);

export default router;