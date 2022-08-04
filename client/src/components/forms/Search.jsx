import React from 'react';
import { useHistory, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { SearchOutlined } from '@ant-design/icons';

const Search = () => {
  const dispatch = useDispatch();
  const { search } = useSelector((state) => ({ ...state }));
  const { text } = search;

  const navigate = useNavigate();

  const handleChange = (e) => {
    dispatch({
      type: 'SEARCH_QUERY',
      payload: { text: e.target.value },
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`/shop?${text}`);
  };

  return (
    <form className="form-inline my-2 my-lg-0" onSubmit={handleSubmit}>
      <input
        onChange={handleChange}
        type="search"
        value={text}
        className="form-control mr-sm-2"
        placeholder="Search"
      />
      <SearchOutlined onClick={handleSubmit} style={{ cursor: 'pointer' }} />
    </form>
  );
};

export default Search;

/*import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { SearchOutlined } from '@ant-design/icons';

const Search = () => {
  const dispatch = useDispatch(); //to dispatch actions type to the store
  const { search } = useSelector((state) => ({ ...state })); //to select the state
  const { text } = search; //to select the text from the state

  const navigate = useNavigate(); //to redirect to another page

  const handleChange = (e) => {
    dispatch({
      type: 'SEARCH_QUERY',
      payload: { text: e.target.value }, //payload value is the value of the text input (user input that we populate in the redux store)
    });
  }; //handleChange is used to update the state. It's pushing the input value to the redux store.

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`/shop?${text}`);
  }; //handleSubmit is used to redirect to the shop page

  return (
    <form className="form-inline my-2 my-lg-0" onSubmit={handleSubmit}>
      <input
        onChange={handleChange}
        type="search"
        value={text} //from the store
        className="form-control mr-sm-2"
        placeholder="Search"
      />
      <SearchOutlined onClick={handleSubmit} style={{ cursor: 'pointer' }} />
    </form>
  );
};

export default Search;*/
