import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getProduct } from '../functions/product';
import SingleProduct from '../components/cards/SingleProduct';

const Product = () => {
  const [product, setProduct] = useState({});

  const { slug } = useParams();

  useEffect(() => {
    const loadSingleProduct = () =>
      getProduct(slug).then((res) => setProduct(res.data));

    loadSingleProduct();
  }, [slug]);

  return (
    <div className="container-fluid">
      <div className="row pt-4">
        <SingleProduct product={product} />
      </div>

      <div className="row">
        <div>Related products</div>
      </div>
    </div>
  );
};

export default Product;
