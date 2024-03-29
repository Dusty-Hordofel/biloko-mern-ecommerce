import express from "express";
//controller
import { createOrUpdateUser, currentUser } from "../controllers/auth.js";
const myMiddleware = (req, res, next) => {
  console.log("Middleware NAYO");
  next();
};

const router = express.Router();

//middlewares
import { authCheck, adminCheck } from "../middlewares/auth.js";

router.get("/testing", myMiddleware, (req, res) => {
  res.json({ message: "Hello World!" });
});

router.post("/create-or-update-user", authCheck, createOrUpdateUser); //the first argument is a url and the second argument is a function which handles the request.)
//middleware is something in the middle of the request and response.

router.post("/current-user", authCheck, currentUser); //currentUser function will give us the current user
router.post("/current-admin", authCheck, adminCheck, currentUser);

export default router;
