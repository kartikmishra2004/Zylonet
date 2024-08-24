import express from "express";
import { unfollow } from "../controllers/follow.controller.js";

const router = express.Router();

router.route("/").post(unfollow);

export default router;