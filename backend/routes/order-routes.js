import express from 'express';

const router = express.Router();

import { getOrder, postOrder, deleteOrder } from '../controllers/order-controller.js';

router.get('/all-orders', getOrder);
router.post('/order', postOrder);
router.get('/all-orders/:_id', deleteOrder);
router.post('/all-orders', deleteOrder);

export default router;
