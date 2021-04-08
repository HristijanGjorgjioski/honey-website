import express from 'express';

const router = express.Router();

import { getProducts, postProducts, getProductsFrontend, deleteProduct } from '../controllers/product-controller.js';

router.get('/', (req,res) => {
    res.render('navigation')
})

router.get('/get-products', getProductsFrontend);
router.get('/all-products', getProducts);
router.post('/add-product', postProducts);
router.get('/all-products/:_id', deleteProduct);
router.post('/all-products', deleteProduct);

export default router;
