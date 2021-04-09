import express from 'express';

import { getContact, postContact, deleteContact } from '../controllers/contact-controller.js';
import { isAdmin } from '../middleware/isAdmin.js';

const router = express.Router();

router.get('/contact', isAdmin, getContact);
router.post('/contact', postContact);

router.get('/contacts/:_id', isAdmin, deleteContact);
router.post('/contacts', isAdmin, deleteContact);

export default router;
