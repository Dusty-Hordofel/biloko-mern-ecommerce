import express from 'express';
// middlewares
import { authCheck, adminCheck } from '../middlewares/auth.js';
const router = express.Router();

// controller
import {
  create,
  read,
  update,
  remove,
  list,
  getSubs,
} from '../controllers/category.js';

// routes
router.post('/category', authCheck, adminCheck, create); //post is for creating a new resource
router.get('/categories', list); //get is used to get the list of resources.list is the controller that allow us to get our categories
router.get('/category/:slug', read); //get is used to get the list of resources.:slug is used to get the resource by slug
router.put('/category/:slug', authCheck, adminCheck, update); //put is used to update the data
router.delete('/category/:slug', authCheck, adminCheck, remove); //delete is used to delete the data
router.get('/category/subs/:_id', getSubs);

export default router;
