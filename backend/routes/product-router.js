import express from 'express';

const router = express.Router();

import { getProducts, postProducts, getProductsFrontend } from '../controllers/product-controller.js';

router.get('/', (req,res) => {
    res.render('navigation')
})

router.get('/get-products', getProductsFrontend);
router.get('/all-products', getProducts);
router.post('/add-product', postProducts);

export default router;
