import express from "express";
import mongoose from "mongoose";
import morgan from "morgan";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

//app
const app = express(); //express is a function which creates a server

//db
const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL);
    console.log("Connected to MongoDB");
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

mongoose.connection.on("disconnected", () => {
  console.log("MongoDB disconnected!");
}); // to listen our connection, so if we are disconnected, we will be notified about that

//middleware
app.use(morgan("dev")); //morgane is a function which logs the requests
app.use(express.json()); //to send JSON.object
app.use(cors()); //to allow cross-origin requests

//route
app.get("/", (req, res) => {
  //res.send("Hello World!");
  res.json({ message: "Hello World!" });
}); //the first argument is a url and the second argument is a function which handles the request.

//port
const port = process.env.PORT || 5000; //port is used to connect to the server.

app.listen(port, () => {
  connect();
  console.log(`Connect to Backend Server on port ${port}`); //the first argument is a port and the second argument is a function which handles the request.
}); // to start our server , we set "scripts in package.json by putting "scripts": {"start": "nodemon index.js"}"
