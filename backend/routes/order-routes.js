import express from 'express';

const router = express.Router();

import { getOrder, postOrder, deleteOrder } from '../controllers/order-controller.js';
import { isAdmin } from '../middleware/isAdmin.js';

router.get('/all-orders', isAdmin, getOrder);
router.post('/order', postOrder);
router.get('/all-orders/:_id', isAdmin, deleteOrder);
router.post('/all-orders', isAdmin, deleteOrder);

export default router;
