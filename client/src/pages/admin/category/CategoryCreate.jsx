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
import CategoryForm from '../../../components/forms/CategoryForm';
import LocalSearch from '../../../components/forms/LocalSearch';

const CategoryCreate = () => {
  const { user } = useSelector((state) => ({ ...state })); //acess user state from the redux store. we have destructured the state and assigned it to user.

  const [name, setName] = useState('');
  const [loading, setLoading] = useState(false);
  const [categories, setCategories] = useState([]);
  // step 1 (searching and filtering)
  const [keyword, setKeyword] = useState('');

  useEffect(() => {
    loadCategories(); //to retrieve the all categories from the database
  }, []); //useEffect will run when the component is mounted.

  const loadCategories = () =>
    getCategories().then((c) => setCategories(c.data)); //to retrieve data and set it to categories.

  const handleSubmit = (e) => {
    e.preventDefault(); //e.preventDefault() will prevent the default behaviour of the form.
    // console.log(name);//the name we are going to send to our backend !
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

  // step 4
  const searched = (keyword) => (c) => c.name.toLowerCase().includes(keyword);
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
          <CategoryForm
            handleSubmit={handleSubmit}
            name={name}
            setName={setName}
          />

          {/* step 2 and step 3 */}
          <LocalSearch keyword={keyword} setKeyword={setKeyword} />
          <hr />
          {/* step 5 */}
          {categories.filter(searched(keyword)).map((c) => (
            //searched function verify if the keyword is in the categories n
            <div className="alert alert-secondary" key={c._id}>
              {c.name}
              <span
                onClick={() => handleRemove(c.slug)}
                className="btn btn-sm float-right"
              >
                <DeleteOutlined className="text-danger" />
              </span>
              <Link to={`/admin/category/${c.slug}`}>
                <span className="btn btn-sm float-right">
                  <EditOutlined className="text-warning" />
                </span>
              </Link>
            </div>
          ))}
          {/* {JSON.stringify(categories)} */}
        </div>
      </div>
    </div>
  );
};

export default CategoryCreate;
