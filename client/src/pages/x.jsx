import React, { useState, useEffect } from 'react';
import {
  fetchProductsByFilter,
  getProductsByCount,
} from '../functions/product';
import { useSelector, useDispatch } from 'react-redux';
import ProductCard from '../components/cards/ProductCard';

const Shop = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  let { search } = useSelector((state) => ({ ...state })); //
  const { text } = search; //to select the text from the state

  console.log(text);
  console.log(products);

  useEffect(() => {
    loadAllProducts();
  }, []);

  // 1. load products by default on page load
  const loadAllProducts = () => {
    getProductsByCount(12).then((p) => {
      setProducts(p.data);
      setLoading(false);
    });
  };

  // 2. load products on user search input
  /*useEffect(() => {
    const delayed = setTimeout(() => {
      fetchProducts({ query: text }); //we use query because we are excepting to receive this as the name of query in our backend.
    }, 300); //text is the value of the text input (user input that we populate in the redux store)
    return () => clearTimeout(delayed);
  }, [text]);*/
  useEffect(() => {
    fetchProducts({ query: text }); //we use query because we are excepting to receive this as the name of query in our backend.
  }, [text]);

  const fetchProducts = (text) => {
    fetchProductsByFilter(text).then((res) => {
      setProducts(res.data);
    });
  };

  //we can also use useEffect to load products on user search input in this way , but it is not the best.
  // useEffect(() => {
  //   const delayed = setTimeout(() => {
  //     fetchProducts({query:text})
  // }, [text]);

  // const fetchProducts = (text) => {
  //   fetchProductsByFilter(text).then((res) => {
  //     setProducts(res.data);
  //   });
  //}

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-3">search/filter menu</div>

        <div className="col-md-9">
          {loading ? (
            <h4 className="text-danger">Loading...</h4>
          ) : (
            <h4 className="text-danger">Products</h4>
          )}

          {products.length < 1 && <p>No products found</p>}

          <div className="row pb-5">
            {products.map((p) => (
              <div key={p._id} className="col-md-4 mt-3">
                <ProductCard product={p} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shop;
