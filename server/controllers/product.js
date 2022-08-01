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
    //res.status(400).send('Create product failed');
    res.status(400).json({
      err: err.message,
    });
  }
};

export const listAll = async (req, res) => {
  let products = await Product.find({})
    .limit(parseInt(req.params.count)) //to be sure it's an integer not a string
    .populate('category')
    .populate('subs')
    .sort([['createdAt', 'desc']]);

  //populate is used to bring us the information we need . here we want to bring the category and the subs
  res.json(products);
};

export const remove = async (req, res) => {
  try {
    const deleted = await Product.findOneAndRemove({
      slug: req.params.slug,
    });
    res.json(deleted);
  } catch (err) {
    console.log(err);
    return res.staus(400).send('Product delete failed');
  }
};

export const read = async (req, res) => {
  const product = await Product.findOne({ slug: req.params.slug }) //we find the product by its slug who come from the url
    .populate('category')
    .populate('subs');
  res.json(product);
};

export const update = async (req, res) => {
  try {
    if (req.body.title) {
      req.body.slug = slugify(req.body.title);
    }
    const updated = await Product.findOneAndUpdate(
      { slug: req.params.slug },
      req.body,
      { new: true }
    );
    res.json(updated);
  } catch (err) {
    console.log('PRODUCT UPDATE ERROR ----> ', err);
    // return res.status(400).send("Product update failed");
    res.status(400).json({
      err: err.message,
    });
  }
};

export const list = async (req, res) => {
  try {
    // createdAt/updatedAt, desc/asc, 3
    const { sort, order, limit } = req.body;
    const products = await Product.find({})
      .populate('category')
      .populate('subs')
      .sort([[sort, order]])
      .limit(limit);

    res.json(products);
  } catch (err) {
    console.log(err);
  }
};
