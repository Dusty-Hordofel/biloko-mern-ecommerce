import express from 'express';
import mongoose from 'mongoose';
import morgan from 'morgan';
import cors from 'cors';
import dotenv from 'dotenv';
import { readdirSync } from 'fs';
import authRoutes from './routes/auth.js';
import userRoutes from './routes/user.js';
import categoryRoutes from './routes/category.js';
import subCategoryRoutes from './routes/sub.js';
import productRoutes from './routes/product.js';
import couponRoutes from './routes/coupon.js';
import cloudinaryRoutes from './routes/cloudinary.js';

dotenv.config();

//app
const app = express(); //express is a function which creates a server

//db
const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL);
    console.log('Connected to MongoDB');
  } catch (error) {
    throw error;
  }
};
/*mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
  })
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((error) => {
    throw error;
  });*/

mongoose.connection.on('disconnected', () => {
  console.log('MongoDB disconnected!');
}); // to listen our connection, so if we are disconnected, we will be notified about that

//middleware
app.use(morgan('dev')); //morgan is a function which logs the requests
app.use(express.json({ limit: '25mb' })); //to send JSON.object & limit the size of the body
app.use(express.urlencoded({ extended: true })); //to send URL encoded data
app.use(cors()); //to allow cross-origin requests

//routes middleware
app.use('/api/auth', authRoutes); //to use the authRoute, we prefix the url with /api/auth
app.use('/api', userRoutes); //to use the authRoute, we prefix the url with /api/auth
app.use('/api', categoryRoutes); //to use the categoryRoutes, we prefix the url with /api
app.use('/api', subCategoryRoutes); //to use the categoryRoutes, we prefix the url with /api
app.use('/api', productRoutes); //to use the categoryRoutes, we prefix the url with /api
app.use('/api', cloudinaryRoutes); //to use the categoryRoutes, we prefix the url with /api
app.use('/api', couponRoutes); //to use the categoryRoutes, we prefix the url with /api
//readdirSync("./routes").map((r) => app.use("/api", import("./routes/" + r)));

//port
const port = process.env.PORT || 5000; //port is used to connect to the server.

app.listen(port, () => {
  connect();
  console.log(`Connect to Backend Server on port ${port}`); //the first argument is a port and the second argument is a function which handles the request.
}); // to start our server , we set "scripts in package.json by putting "scripts": {"start": "nodemon index.js"}"
