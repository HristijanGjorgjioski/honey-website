import express from 'express';

const router = express.Router();

import { postOrder } from '../controllers/order-controller';

router.post('/order', postOrder);

export default router;
