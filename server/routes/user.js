import express from 'express';
// import { user } from '../controllers/user.js';

const router = express.Router();

// middlewares
import { authCheck } from '../middlewares/auth.js';
// controllers
import { userCart } from '../controllers/user.js';

router.post('/cart', authCheck, userCart); // save cart

// router.get('/user', user); //the first argument is a url and the second argument is a function which handles the request.)

export default router;
