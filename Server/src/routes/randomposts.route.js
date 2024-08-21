import express from "express";
import randomposts from "../controllers/randomposts.controller.js"

const router = express.Router();

router.route("/").get(randomposts);

export default router;