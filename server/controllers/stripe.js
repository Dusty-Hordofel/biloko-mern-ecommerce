import User from '../models/user.js';
import Cart from '../models/cart.js';
import Product from '../models/product.js';
import Coupon from '../models/coupon.js';
import dotenv from 'dotenv';
import Stripe from 'stripe';

dotenv.config();
const stripe = Stripe(process.env.STRIPE_SECRET);

export const createPaymentIntent = async (req, res) => {
  //console.log(req.body);

  const { couponApplied } = req.body;
  //const { couponApplied } = req.body;
  //console.log('couponApplied', couponApplied);

  // later apply coupon
  // later calculate price

  // 1 find user
  const user = await User.findOne({ email: req.user.email }).exec();
  // 2 get user cart total
  const { cartTotal, totalAfterDiscount } = await Cart.findOne({
    orderdBy: user._id,
  }).exec();
  //console.log('CART TOTAL', cartTotal, 'AFTER DIS%', totalAfterDiscount);

  let finalAmount = 0;

  if (couponApplied && totalAfterDiscount) {
    finalAmount = totalAfterDiscount * 100;
  } else {
    finalAmount = cartTotal * 100;
  }

  // create payment intent with order amount and currency
  const paymentIntent = await stripe.paymentIntents.create({
    amount: finalAmount, //cartTotal * 100
    currency: 'usd',
  });

  res.send({
    clientSecret: paymentIntent.client_secret,
    cartTotal,
    totalAfterDiscount,
    payable: finalAmount,
  });
};
