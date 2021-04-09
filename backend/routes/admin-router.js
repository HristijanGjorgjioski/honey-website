import express from 'express';

import { getAdmin, postAdmin } from '../controllers/admin-controller.js';

const router = express.Router();

router.get('/admin', getAdmin);
router.post('/admin', postAdmin);

export default router;