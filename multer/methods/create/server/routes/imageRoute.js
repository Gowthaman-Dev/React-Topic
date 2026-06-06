import express from "express";
import upload from "../middleware/upload.js";
import { createImage } from "../controller/imageController.js";

const router = express.Router();

router.post("/create", upload.single("image"), createImage);

export default router;