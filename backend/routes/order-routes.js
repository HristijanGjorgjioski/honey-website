import express from 'express';

const router = express.Router();

import { postOrder } from '../controllers/order-controller.js';

router.post('/order', postOrder);

export default router;
