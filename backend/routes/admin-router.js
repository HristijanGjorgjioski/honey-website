import express from 'express';

import { getAdmin, postAdmin } from '../controllers/admin-controller.js';

const router = express.Router();

router.get('/login', getAdmin);
router.post('/login', postAdmin);

export default router;