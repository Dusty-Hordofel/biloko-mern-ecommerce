import User from '../models/user.js';
import Cart from '../models/cart.js';
import Product from '../models/product.js';
import Coupon from '../models/coupon.js';
import dotenv from 'dotenv';
import Stripe from 'stripe';

dotenv.config();
const stripe = Stripe(process.env.STRIPE_SECRET);

export const createPaymentIntent = async (req, res) => {
  // later apply coupon
  // later calculate price

  // 1 find user
  const user = await User.findOne({ email: req.user.email });
  // 2 get user cart total
  const { cartTotal } = await Cart.findOne({ orderdBy: user._id });

  console.log('CART TOTAL CHARGED', cartTotal);
  // create payment intent with order amount and currency

  const paymentIntent = await stripe.paymentIntents.create({
    amount: cartTotal * 100,
    currency: 'usd',
  });

  res.send({
    clientSecret: paymentIntent.client_secret,
  });
};
