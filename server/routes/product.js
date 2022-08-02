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
  list,
  productsCount,
  productStar,
} from '../controllers/product.js';

// routes
router.post('/product', authCheck, adminCheck, create);
router.get('/products/total', productsCount);

router.get('/products/:count', listAll); // products/100
router.delete('/product/:slug', authCheck, adminCheck, remove);
router.get('/product/:slug', read);
router.put('/product/:slug', authCheck, adminCheck, update);

router.post('/products', list);

// rating
router.put('/product/star/:productId', authCheck, productStar); //authCheck make user available from firebase based on user email (req.user.email)

export default router;
