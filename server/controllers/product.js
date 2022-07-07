import Product from '../models/product.js'; //product model
import slugify from 'slugify'; //slugify is a function which converts a string into a url-friendly string

export const create = async (req, res) => {
  try {
    console.log(req.body);
    //we create a slug based on the tile & we add that in the body itself
    req.body.slug = slugify(req.body.title); //the benifit of that we can use the request body to create a new product
    const newProduct = await new Product(req.body).save();
    res.json(newProduct);
  } catch (err) {
    console.log(err);
    res.status(400).send('Create product failed');
  }
};