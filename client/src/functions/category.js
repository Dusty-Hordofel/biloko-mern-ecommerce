import axios from 'axios';

export const getCategories = async () =>
  await axios.get(`${process.env.REACT_APP_API}/categories`); //this is how to send a request to our backend.

export const getCategory = async (slug) =>
  await axios.get(`${process.env.REACT_APP_API}/category/${slug}`); //to get a single category

export const removeCategory = async (slug, authtoken) =>
  await axios.delete(`${process.env.REACT_APP_API}/category/${slug}`, {
    headers: {
      authtoken,
    }, //we nedd to send the authtoken in the header to make sure that the user is authorized to delete the category.
  });

//we have 3 arguments below(the slug we want to update,the information to add itself and the authtoken).
export const updateCategory = async (slug, category, authtoken) =>
  await axios.put(`${process.env.REACT_APP_API}/category/${slug}`, category, {
    headers: {
      authtoken,
    }, //we need to send the authtoken in the header to make sure that the user is authorized to delete the category.
  });

export const createCategory = async (category, authtoken) =>
  await axios.post(`${process.env.REACT_APP_API}/category`, category, {
    headers: {
      authtoken,
    }, //we nedd to send the authtoken in the header to make sure that the user is authorized to delete the category.
  });

export const getCategorySubs = async (_id) =>
  await axios.get(`${process.env.REACT_APP_API}/category/subs/${_id}`);
