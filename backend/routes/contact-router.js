import express from 'express';

import { postContact } from '../controllers/contact-controller.js';

const router = express.Router();

router.post('/contact', postContact);

export default router;
