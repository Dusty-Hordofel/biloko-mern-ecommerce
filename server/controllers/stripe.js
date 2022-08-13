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

  const paymentIntent = await stripe.paymentIntents.create({
    amount: 2000,
    currency: 'eur',
    payment_method_types: ['card'],
  });

  res.send({
    clientSecret: paymentIntent.client_secret,
  });
};
