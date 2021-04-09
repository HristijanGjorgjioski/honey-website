import express from 'express';

import { getContact, postContact, deleteContact } from '../controllers/contact-controller.js';

const router = express.Router();

router.get('/contact', getContact);
router.post('/contact', postContact);

router.get('/contacts/:_id', deleteContact);
router.post('/contacts', deleteContact);

export default router;
