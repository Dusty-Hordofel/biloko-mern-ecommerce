import express from 'express';
const router = express.Router();

// middlewares
import { authCheck, adminCheck } from '../middlewares/auth.js';

// controller
import { create, listAll } from '../controllers/product.js';

// routes
router.post('/product', authCheck, adminCheck, listAll);
router.get('/products/:count', listAll); //we can't fetch all products at once because of the limit, server will crack. We define a count parameter to fetch a limited number of products ("/products/10")

export default router;
