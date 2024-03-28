import express from 'express';
import * as BorderController from '../controllers/borderController';

const router = express.Router();

router.post('/', BorderController.createBoder);

export default router;