import express from 'express'
import { getimageprediction, updateimage } from '../controllers/prediction.js';

const router = express.Router();

router.post("/", updateimage);
router.get("/", getimageprediction)

export default router