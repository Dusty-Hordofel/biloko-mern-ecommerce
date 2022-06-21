import express from "express";
import { testuser } from "../controllers/auth.js";

const router = express.Router();

router.get("/test", testuser); //the first argument is a url and the second argument is a function which handles the request.)

export default router;
