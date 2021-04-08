import express from 'express';

const router = express.Router();

import { getProducts, postProducts } from '../controllers/product-controller.js';

router.get('/all-products', getProducts);
router.post('/add-product', postProducts);

export default router;
