import express from 'express';
// import { user } from '../controllers/user.js';

const router = express.Router();

// middlewares
import { authCheck } from '../middlewares/auth.js';
// controllers
import { userCart, getUserCart } from '../controllers/user.js';

router.post('/user/cart', authCheck, userCart); // save cart(the first argument is a url and the second argument is a function which handles the request.)
router.get('/user/cart', authCheck, getUserCart); // get cart

export default router;
