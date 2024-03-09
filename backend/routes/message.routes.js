import express from 'express'
import { sendMessage } from '../controllers/message.controler.js';
import protectRoute from '../midleware/protectRoute.js';

const router = express.Router();

router.post('/send:id',protectRoute, sendMessage)

export default router;