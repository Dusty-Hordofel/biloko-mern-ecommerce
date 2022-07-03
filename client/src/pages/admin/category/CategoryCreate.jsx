import React, { useState, useEffect } from 'react';
import AdminNav from '../../../components/nav/AdminNav';
import { toast } from 'react-toastify';
import { useSelector } from 'react-redux';
import {
  createCategory,
  getCategories,
  removeCategory,
} from '../../../functions/category';
import { Link } from 'react-router-dom';
import { EditOutlined, DeleteOutlined } from '@ant-design/icons';

const CategoryCreate = () => {
  const { user } = useSelector((state) => ({ ...state })); //acess user state from the redux store. we have destructured the state and assigned it to user.

  const [name, setName] = useState('');
  const [loading, setLoading] = useState(false);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    loadCategories(); //te retrieve the all categories from the database
  }, []); //useEffect will run when the component is mounted.

  const loadCategories = () =>
    getCategories().then((c) => setCategories(c.data)); //to retrieve data and set it to categories.

  const handleSubmit = (e) => {
    e.preventDefault(); //e.preventDefault() will prevent the default behaviour of the form.
    // console.log(name);
    setLoading(true);
    //to create a category we send the name of the category and the user token to the createCategory function
    createCategory({ name }, user.token)
      .then((res) => {
        // console.log(res)
        //when we get the response , we set:
        setLoading(false); //loading back to false
        setName(''); //we clear the input field,set name to empty string
        toast.success(`"${res.data.name}" is created`); //use toast to show a success message
      })
      .catch((err) => {
        console.log(err);
        //if we have an error, we set loading to false and show a toast message
        setLoading(false);
        if (err.response.status === 400) toast.error(err.response.data); //erro message come from the server
      });
  };

  const categoryForm = () => (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label>Name</label>
        <input
          type="text"
          className="form-control"
          onChange={(e) => setName(e.target.value)}
          value={name}
          autoFocus
          required
        />
        <br />
        <button className="btn btn-outline-primary">Save</button>
      </div>
    </form>
  );

  const handleRemove = async (slug) => {
    // let answer = window.confirm('Delete?');
    // console.log(answer, slug);
    if (window.confirm('Delete?')) {
      setLoading(true);
      //to remove a category we send the slug and the user token to the removeCategoryfunction
      removeCategory(slug, user.token)
        .then((res) => {
          setLoading(false);
          toast.error(`${res.data.name} deleted`);
          loadCategories();
        })
        .catch((err) => {
          if (err.response.status === 400) {
            setLoading(false);
            toast.error(err.response.data);
          }
        });
    }
  };

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-2">
          <AdminNav />
        </div>
        <div className="col">
          {loading ? (
            <h4 className="text-danger">Loading..</h4>
          ) : (
            <h4>Create category</h4>
          )}
          {categoryForm()}
          <hr />
          {/* {JSON.stringify(categories)} */}
          {categories.map((c) => (
            <div className="alert alert-secondary" key={c._id}>
              {c.name}
              <span
                onClick={() => handleRemove(c.slug)}
                className="btn btn-sm float-right"
              >
                <DeleteOutlined className="text-danger" />
              </span>
              {/*it will take us to the edit page */}
              <Link to={`/admin/category/${c.slug}`}>
                <span className="btn btn-sm float-right">
                  <EditOutlined className="text-warning" />
                </span>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CategoryCreate;
