import Coupon from '../models/coupon.js';

// create, remove, list

export const create = async (req, res) => {
  try {
    console.log(req.body);
    const { name, expiry, discount } = req.body.coupon;
    res.json(await new Coupon({ name, expiry, discount }).save());
  } catch (err) {
    console.log(err);
  }
};

export const remove = async (req, res) => {
  try {
    res.json(await Coupon.findByIdAndDelete(req.params.couponId));
  } catch (err) {
    console.log(err);
  }
};

export const list = async (req, res) => {
  try {
    res.json(await Coupon.find({}).sort({ createdAt: -1 }));
  } catch (err) {
    console.log(err);
  }
};
