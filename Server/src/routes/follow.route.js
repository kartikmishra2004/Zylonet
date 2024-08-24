import express from "express";
import { follow } from "../controllers/follow.controller.js";

const router = express.Router();

router.route("/").post(follow);

export default router;