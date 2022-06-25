import Category from "../models/category.js";
import slugify from "slugify";

export const create = async (req, res) => {
  try {
    //Notice: to create category we want the data that coming from the frontend. So we need to get the data from the req.body.The only thing we need is name
    const { name } = req.body;
    //we can alse create const category = await new Category({ name, slug: slugify(name) }).save() then send the category to the frontend using res.json(category).;
    res.json(await new Category({ name, slug: slugify(name) }).save()); //you can lowercase the name and slugify the name or slugify(name).toLowerCase();
  } catch (err) {
    console.log(err);
    res.status(400).send("Create category failed"); //res.status(400) is used for error
  }
};

export const list = async (req, res) =>
  res.json(await Category.find({}).sort({ createdAt: -1 }).exec());

export const read = async (req, res) => {
  let category = await Category.findOne({ slug: req.params.slug }).exec();
  res.json(category);
};

export const update = async (req, res) => {
  const { name } = req.body;
  try {
    const updated = await Category.findOneAndUpdate(
      { slug: req.params.slug },
      { name, slug: slugify(name) },
      { new: true }
    );
    res.json(updated);
  } catch (err) {
    res.status(400).send("Create update failed");
  }
};

export const remove = async (req, res) => {
  try {
    const deleted = await Category.findOneAndDelete({ slug: req.params.slug });
    res.json(deleted);
  } catch (err) {
    res.status(400).send("Create delete failed");
  }
};
