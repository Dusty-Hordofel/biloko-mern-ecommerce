import Product from '../models/product.js'; //product model
import slugify from 'slugify'; //slugify is a function which converts a string into a url-friendly string
import User from '../models/user.js'; //user model
//import shortid from 'shortid'; //shortid is used to create a unique id for the category.

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

// WITHOUT PAGINATION
// export const list = async (req, res) => {
//   try {
//     // createdAt/updatedAt, desc/asc, 3
//     const { sort, order, limit } = req.body;
//     const products = await Product.find({})
//       .populate('category')
//       .populate('subs')
//       .sort([[sort, order]])
//       .limit(limit);

//     res.json(products);
//   } catch (err) {
//     console.log(err);
//   }
// };

// WITH PAGINATION
export const list = async (req, res) => {
  console.table(req.body);
  try {
    // createdAt/updatedAt, desc/asc, 3
    const { sort, order, page } = req.body;
    const currentPage = page || 1; //if currentPage is not defined we set it to 1
    const perPage = 3; // 3,the number of products per page

    const products = await Product.find({})
      .skip((currentPage - 1) * perPage) //skip is used to skip the number of products we want to skip
      .populate('category')
      .populate('subs')
      .sort([[sort, order]])
      .limit(perPage);

    res.json(products);
  } catch (err) {
    console.log(err);
  }
};

export const productsCount = async (req, res) => {
  let total = await Product.find({}).estimatedDocumentCount();
  res.json(total);
};

export const productStar = async (req, res) => {
  const product = await Product.findById(req.params.productId); //productId is the id of the product we want to rate
  const user = await User.findOne({ email: req.user.email }); //we find the logged user  by its email
  const { star } = req.body; //we get the star from the request body

  // who is updating?
  // check if currently logged in user have already added rating to this product?
  let existingRatingObject = product.ratings.find(
    (ele) => ele.postedBy.toString() === user._id.toString() //you have to use toString if you use === equality operator
  ); //check if the user has already rated the product

  // if user haven't left rating yet, push it
  if (existingRatingObject === undefined) {
    let ratingAdded = await Product.findByIdAndUpdate(
      product._id,
      {
        $push: { ratings: { star, postedBy: user._id } }, //we push this object { star, postedBy: user._id } to the ratings array. push method is used to add an element to an array
      },
      { new: true } //we want to return the new rating
    ); //you can also use req.params.productId instead of product._id

    console.log('ratingAdded', ratingAdded);
    res.json(ratingAdded);
  } else {
    // if user have already left rating, update it
    const ratingUpdated = await Product.updateOne(
      {
        ratings: { $elemMatch: existingRatingObject }, //$elemMatch is used to find the element in the ratings array
      },
      { $set: { 'ratings.$.star': star } }, //$set method is used to update the element in the ratings array. ratings.$.star means is the star we want to update
      { new: true } //we want to return the new rating
    );
    console.log('ratingUpdated', ratingUpdated);
    res.json(ratingUpdated);
  }
};

export const listRelated = async (req, res) => {
  const product = await Product.findById(req.params.productId); //productId is the id of the related product

  const related = await Product.find({
    _id: { $ne: product._id }, //$ne is used to find the element in the array that is not equal to the productId
    category: product.category,
  })
    .limit(3)
    .populate('category')
    .populate('subs')
    .populate({ path: 'ratings.postedBy' })
    .exec(); //we can't just populate('postedBy') , it's not in the schema. We have to populate ('ratings.postedBy') or ({path: 'ratings.postedBy',select:'name email role cart adress',});

  res.json(related);
};

// SERACH / FILTER

const handleQuery = async (req, res, query) => {
  const products = await Product.find({ $text: { $search: query } });
  // .populate('category', '_id name')
  // .populate('subs', '_id name')
  // .populate('postedBy', '_id name')
  // .exec();

  res.json(products);
};

const handlePrice = async (req, res, price) => {
  try {
    let products = await Product.find({
      price: {
        $gte: price[0], //$gte is used to find the element in the array that is greater than or equal to the price[0]
        $lte: price[1], //$lte is used to find the element in the array that is less than or equal to the price[1]
      },
    })
      .populate('category', '_id name')
      .populate('subs', '_id name')
      // .populate({ path: 'ratings.postedBy', select: '_id name' })
      .populate('postedBy', '_id name')
      .exec();

    res.json(products);
  } catch (err) {
    console.log(err);
  }
};

export const searchFilters = async (req, res) => {
  const { query, price } = req.body;

  if (query) {
    console.log('query', query);
    await handleQuery(req, res, query);
  }

  // price [20, 200]
  if (price !== undfined) {
    console.log('price ---> ', price);
    await handlePrice(req, res, price);
  }
};

/*const handleQuery = async (req, res, query) => {
  //search query based on the toHaveTextContent the text we want to search
  const products = await Product.find({ $text: { $search: query } }) //$text is used to search in the title and description.we want to search the products that match the query { $search: query } and we want to return the products
    .populate('category', '_id name') //we want to populate the category with the _id and name
    .populate('subs', '_id name') //we want to populate the subs with the _id and name
    .populate({ path: 'ratings.postedBy', select: '_id name' })
    .exec(); //we want to populate the postedBy with the _id and name

  res.json(products);
};

export const searchFilters = async (req, res) => {
  //you can call query any thing like text, color ... all you want.
  const { query } = req.body; //query is the search query that we get from the request body

  if (query) {
    console.log('query', query);
    await handleQuery(req, res, query);
  }
};*/
