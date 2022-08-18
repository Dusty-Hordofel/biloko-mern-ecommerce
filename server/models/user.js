import mongoose from 'mongoose';
const { ObjectId } = mongoose.Schema;

const userSchema = new mongoose.Schema(
  {
    name: String,
    email: {
      type: String,
      required: true,
      index: true,
    },
    role: {
      type: String,
      default: 'subscriber',
    },
    cart: {
      type: Array,
      default: [],
    },
    address: String,
    wishlist: [{ type: ObjectId, ref: 'Product' }],
  },
  { timestamps: true } //second argument is the time stamps
);

export default mongoose.model('User', userSchema);
