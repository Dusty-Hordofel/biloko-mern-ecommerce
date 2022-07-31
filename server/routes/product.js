import express from 'express';
const router = express.Router();

// middlewares
import { authCheck, adminCheck } from '../middlewares/auth.js';

// controller
import {
  create,
  listAll,
  remove,
  read,
  update,
} from '../controllers/product.js';

// routes
router.post('/product', authCheck, adminCheck, listAll);
router.get('/products/:count', listAll); //we can't fetch all products at once because of the limit, server will crack. We define a count parameter to fetch a limited number of products ("/products/10")
router.delete('/product/:slug', authCheck, adminCheck, remove);
router.get('/product/:slug', read);
router.put('/product/:slug', authCheck, adminCheck, update);

export default router;
