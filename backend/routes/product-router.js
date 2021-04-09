import express from 'express';

const router = express.Router();

import { getProducts, postProducts, getProductsFrontend, deleteProduct } from '../controllers/product-controller.js';
import { isAdmin } from '../middleware/isAdmin.js';

router.get('/', isAdmin, (req,res) => {
    res.render('navigation')
})

router.get('/get-products', getProductsFrontend);
router.get('/all-products', isAdmin, getProducts);
router.post('/add-product', isAdmin, postProducts);
router.get('/all-products/:_id', isAdmin, deleteProduct);
router.post('/all-products', isAdmin, deleteProduct);

export default router;
