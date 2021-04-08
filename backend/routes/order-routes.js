import express from 'express';

const router = express.Router();

import { getOrder, postOrder } from '../controllers/order-controller.js';

router.get('/all-orders', getOrder);
router.post('/order', postOrder);

export default router;
