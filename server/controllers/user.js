import User from '../models/user.js';
import Product from '../models/product.js';
import Cart from '../models/cart.js';
import Coupon from '../models/coupon.js';

export const userCart = async (req, res) => {
  // console.log(req.body); // {cart: []}
  const { cart } = req.body;

  let products = [];

  //we want to know who's the logged in user
  const user = await User.findOne({ email: req.user.email }); //we get the user from the database using the email from the user who is logged in

  // check if cart with logged in user id already exist
  let cartExistByThisUser = await Cart.findOne({ orderdBy: user._id });

  if (cartExistByThisUser) {
    cartExistByThisUser.remove(); //remove() is a mongoose method to remove the cart
    console.log('removed old cart');
  }

  for (let i = 0; i < cart.length; i++) {
    let object = {};

    //add the product properties to the object variable
    object.product = cart[i]._id;
    object.count = cart[i].count;
    object.color = cart[i].color;

    // get price for creating total
    let productFromDb = await Product.findById(cart[i]._id).select('price');
    // let { price } = await Product.findById(cart[i]._id).select('price');
    object.price = productFromDb.price;

    products.push(object); //add object to the products array
  }

  console.log('products', products);

  let cartTotal = 0;
  for (let i = 0; i < products.length; i++) {
    cartTotal = cartTotal + products[i].price * products[i].count;
  }

  // console.log("cartTotal", cartTotal);

  let newCart = await new Cart({
    products,
    cartTotal,
    orderdBy: user._id,
  }).save();

  console.log('new cart', newCart);
  res.json({ ok: true });
};

export const getUserCart = async (req, res) => {
  const user = await User.findOne({ email: req.user.email }); //we find the user from the database using the email from the user who is logged in

  let cart = await Cart.findOne({ orderdBy: user._id }).populate(
    'products.product',
    '_id title price totalAfterDiscount'
  );

  const { products, cartTotal, totalAfterDiscount } = cart;
  res.json({ products, cartTotal, totalAfterDiscount });
};

export const emptyCart = async (req, res) => {
  console.log('empty cart');
  const user = await User.findOne({ email: req.user.email });

  const cart = await Cart.findOneAndRemove({ orderdBy: user._id });
  res.json(cart);
};

export const saveAddress = async (req, res) => {
  const userAddress = await User.findOneAndUpdate(
    { email: req.user.email },
    { address: req.body.address }
  );

  res.json({ ok: true });
};

export const applyCouponToUserCart = async (req, res) => {
  const { coupon } = req.body;
  console.log('COUPON', coupon);

  const validCoupon = await Coupon.findOne({ name: coupon });
  if (validCoupon === null) {
    return res.json({
      err: 'Invalid coupon',
    });
  }
  console.log('VALID COUPON', validCoupon);

  const user = await User.findOne({ email: req.user.email });

  let { products, cartTotal } = await (
    await Cart.findOne({ orderdBy: user._id })
  ).populate('products.product', '_id title price');

  console.log('cartTotal', cartTotal, 'discount%', validCoupon.discount);

  // calculate the total after discount
  let totalAfterDiscount = (
    cartTotal -
    (cartTotal * validCoupon.discount) / 100
  ).toFixed(2); // 99.99

  Cart.findOneAndUpdate(
    { orderdBy: user._id },
    { totalAfterDiscount },
    { new: true }
  );

  res.json(totalAfterDiscount);
};
