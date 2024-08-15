import express from "express";
import { signup, login, userauth } from "../controllers/auth.controller.js";
import authMiddleware from "../middlewares/auth.middleware.js";
import validate from "../middlewares/validate.middleware.js";
import { signupSchema, loginSchema } from "../validators/auth.validator.js";

const router = express.Router();

router.route("/signup").post(validate(signupSchema), signup);

router.route("/login").post(validate(loginSchema), login);

router.route("/userauth").get(authMiddleware, userauth);

export default router;