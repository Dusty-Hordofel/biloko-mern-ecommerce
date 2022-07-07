import Category from '../models/category.js';
import Sub from '../models/sub.js';
import slugify from 'slugify';

export const create = async (req, res) => {
  try {
    //Notice: to create category we want the data that coming from the frontend. So we need to get the data from the req.body.The only thing we need is name
    const { name } = req.body;
    //we can alse create const category = await new Category({ name, slug: slugify(name) }).save() then send the category to the frontend using res.json(category).;
    res.json(await new Category({ name, slug: slugify(name) }).save()); //you can lowercase the name and slugify the name or slugify(name).toLowerCase();
  } catch (err) {
    console.log(err);
    res.status(400).send('Create category failed'); //res.status(400) is used for error
  }
};

export const list = async (req, res) =>
  res.json(await Category.find({}).sort({ createdAt: -1 })); //we want to sort the categories by the date they were created.

export const read = async (req, res) => {
  let category = await Category.findOne({ slug: req.params.slug }); //req.params.slug is the slug of the category.findOne({ slug: req.params.slug }) is the query that we want to find a specific category using the slug as parameter.
  res.json(category);
};

export const update = async (req, res) => {
  const { name } = req.body;
  try {
    const updated = await Category.findOneAndUpdate(
      { slug: req.params.slug }, //we want to find the category using the slug.
      { name, slug: slugify(name) }, // we update the name and slug.
      { new: true } //new: true is used to get the updated category.
    );
    res.json(updated);
  } catch (err) {
    res.status(400).send('Create update failed');
  }
};

export const remove = async (req, res) => {
  try {
    const deleted = await Category.findOneAndDelete({ slug: req.params.slug }); //we finf based on the slug.we dont' use id but slug.
    res.json(deleted);
  } catch (err) {
    res.status(400).send('Create delete failed');
  }
};

export const getSubs = (req, res) => {
  Sub.find({ parent: req.params._id }).exec((err, subs) => {
    if (err) console.log(err);
    res.json(subs);
  });
}; //we try to find all the sub category. we use the parent as parameter.
