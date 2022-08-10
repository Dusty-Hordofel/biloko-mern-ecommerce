import User from '../models/user.js';
import Product from '../models/product.js';
import Cart from '../models/cart.js';

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
    let { price } = await Product.findById(cart[i]._id).select('price');
    object.price = price;

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

// export const user = (req, res) => {
//   res.json({ message: 'Hello User!' });
// };
