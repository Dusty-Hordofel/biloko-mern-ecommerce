import Order from '../models/order.js';
//import User from '../models/user.js';

//orders, orderStatus

export const orders = async (req, res) => {
  let allOrders = await Order.find({})
    .sort('-createdAt')
    .populate('products.product')
    .exec();

  res.json(allOrders);
};

export const orderStatus = async (req, res) => {
  // console.log(req.body);
  // return;
  const { orderId, orderStatus } = req.body;

  let updated = await Order.findByIdAndUpdate(
    orderId,
    { orderStatus },
    { new: true }
  ).exec();

  res.json(updated);
};
