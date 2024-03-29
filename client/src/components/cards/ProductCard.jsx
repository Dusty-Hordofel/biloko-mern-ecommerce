import { useState } from 'react';
import { Card, Tooltip } from 'antd';
import { EyeOutlined, ShoppingCartOutlined } from '@ant-design/icons';
import laptop from '../../images/laptop.png';
import { Link } from 'react-router-dom';
import { showAverage } from '../../functions/rating';
import _ from 'lodash'; //you can import lodash or _ from 'lodash'
import { useSelector, useDispatch } from 'react-redux';

const { Meta } = Card;

const ProductCard = ({ product }) => {
  const [tooltip, setTooltip] = useState('Click to add');

  // redux
  const { user, cart } = useSelector((state) => ({ ...state })); // destructuring state
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    // create cart array
    let cart = [];
    if (typeof window !== 'undefined') {
      // if cart is in local storage GET it
      if (localStorage.getItem('cart')) {
        cart = JSON.parse(localStorage.getItem('cart')); //parse is used to convert string to array
      }

      // push new product to cart
      cart.push({
        ...product,
        count: 1,
      }); //spread operator is used to copy all properties of product to cart, count is 1 because we want to add 1 product to cart

      // remove duplicates
      let unique = _.uniqWith(cart, _.isEqual); //uniqWith is used to remove duplicates from cart array
      // save to local storage
      // console.log('unique', unique)
      localStorage.setItem('cart', JSON.stringify(unique)); //stringify is used to convert array to string

      // show tooltip
      setTooltip('Added');

      // add to redux state
      dispatch({
        type: 'ADD_TO_CART',
        payload: unique,
      });

      // show cart items in side drawer
      dispatch({
        type: 'SET_VISIBLE',
        payload: true,
      });
    }
  };

  // destructure
  const { images, title, description, slug, price } = product;
  return (
    <>
      {product && product.ratings && product.ratings.length > 0 ? (
        showAverage(product)
      ) : (
        <div className="text-center pt-1 pb-3">No rating yet</div>
      )}
      <Card
        cover={
          <img
            src={images && images.length ? images[0].url : laptop}
            style={{ height: '150px', objectFit: 'cover' }}
            className="p-1"
            alt="product"
          />
        }
        actions={[
          <Link to={`/product/${slug}`}>
            <EyeOutlined className="text-warning" /> <br /> View Product
          </Link>,
          <Tooltip title={tooltip}>
            <a onClick={handleAddToCart} disabled={product.quantity < 1}>
              <ShoppingCartOutlined className="text-danger" /> <br />
              {product.quantity < 1 ? 'Out of stock' : 'Add to Cart'}
            </a>
          </Tooltip>,
        ]}
      >
        <Meta
          title={`${title} - $${price}`}
          description={`${description && description.substring(0, 40)}...`}
        />
      </Card>
    </>
  );
};

export default ProductCard;
