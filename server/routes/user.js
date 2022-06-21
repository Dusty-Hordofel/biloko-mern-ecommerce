import express from "express";
import { user } from "../controllers/user.js";

const router = express.Router();

router.get("/user", user); //the first argument is a url and the second argument is a function which handles the request.)

export default router;
