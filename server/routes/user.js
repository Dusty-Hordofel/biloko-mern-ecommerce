import express from 'express';
// import { user } from '../controllers/user.js';

const router = express.Router();

// middlewares
import { authCheck } from '../middlewares/auth.js';
// controllers
import {
  userCart,
  getUserCart,
  emptyCart,
  saveAddress,
  applyCouponToUserCart,
  createOrder,
  orders
} from '../controllers/user.js';

router.post('/user/cart', authCheck, userCart); // save cart(the first argument is a url and the second argument is a function which handles the request.)
router.get('/user/cart', authCheck, getUserCart); // get cart
router.delete('/user/cart', authCheck, emptyCart); // empty cart
router.post('/user/address', authCheck, saveAddress);

router.post('/user/order', authCheck, createOrder);
router.get("/user/orders", authCheck, orders);


// coupon
router.post('/user/cart/coupon', authCheck, applyCouponToUserCart);

export default router;
