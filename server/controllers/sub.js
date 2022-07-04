import Sub from '../models/sub.js';
import slugify from 'slugify';

export const create = async (req, res) => {
  try {
    const { name } = req.body;
    res.json(await new Sub({ name, slug: slugify(name) }).save());
  } catch (err) {
    // console.log(err);
    res.status(400).send('Create sub failed');
  }
};

export const list = async (req, res) =>
  res.json(await Sub.find({}).sort({ createdAt: -1 }).exec());

export const read = async (req, res) => {
  let sub = await Sub.findOne({ slug: req.params.slug }).exec();
  res.json(sub);
};

export const update = async (req, res) => {
  const { name } = req.body;
  try {
    const updated = await Sub.findOneAndUpdate(
      { slug: req.params.slug },
      { name, slug: slugify(name) },
      { new: true }
    );
    res.json(updated);
  } catch (err) {
    res.status(400).send('Sub update failed');
  }
};

export const remove = async (req, res) => {
  try {
    const deleted = await Sub.findOneAndDelete({ slug: req.params.slug });
    res.json(deleted);
  } catch (err) {
    res.status(400).send('Sub delete failed');
  }
};
