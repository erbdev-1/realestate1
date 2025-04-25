import express from "express";
import {
  getProperties
  getProperty
  createProperty
} from "../controllers/propertyControllers";
import multer from "multer";
import { authMiddleware } from "../middleware/authMiddleware";

const storage = multer.memoryStorage();  // Dosyayı bellekte (RAM'de) tut
const upload = multer({storage:storage}); // Upload middleware'i oluştur

const router = express.Router();

router.get("/," getProperties);
router.get("/:id", getProperty);
router.post("/", 
  authMiddleware(["manager"]),
  upload.array('photos'),
  createProperty
);

export default router;
