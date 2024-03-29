import React, { useEffect, useState } from 'react';
import { getProducts, getProductsCount } from '../../functions/product';
import LoadingCard from '../cards/LoadingCard';
import ProductCard from '../cards/ProductCard';
import { Pagination } from 'antd';

const NewArrivals = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [productsCount, setProductsCount] = useState(0);
  const [page, setPage] = useState(1);

  // console.log(page);
  //console.log(productsCount);

  useEffect(() => {
    const loadAllProducts = () => {
      setLoading(true);
      // sort, order, limit
      getProducts('createdAt', 'desc', page).then((res) => {
        setProducts(res.data);
        setLoading(false);
      });
    };
    loadAllProducts();
  }, [page]);

  useEffect(() => {
    getProductsCount().then((res) => setProductsCount(res.data));
  }, []);

  return (
    <>
      <div className="container">
        {loading ? (
          <LoadingCard count={3} />
        ) : (
          <div className="row">
            {products.map((product) => (
              <div key={product._id} className="col-md-4">
                <ProductCard product={product} />
              </div>
            ))}
          </div>
        )}
      </div>
      <div className="row">
        <nav className="col-md-4 offset-md-4 text-center pt-5 p-3">
          <Pagination
            defaultCurrent={page}
            // total={(productsCount / 3) * 10} //revoir le calcul parce que Ant ne fonctionne pas avec les virgules
            total={30}
            onChange={(value) => setPage(value)}
          />
        </nav>
      </div>
    </>
  );
};

export default NewArrivals;
