import express from "express";
import { createBasicInfo, getBasicInfo, updateBasicInfo, deleteBasicInfo } from "../controllers/basicInfoController.js";

const router = express.Router();

// Public Routes (Frontend will call these)
router.get("/", getBasicInfo);

// Admin Routes (Need protection later with auth middleware)
router.post("/", createBasicInfo);
router.put("/", updateBasicInfo);
router.delete("/", deleteBasicInfo);

export default router;
