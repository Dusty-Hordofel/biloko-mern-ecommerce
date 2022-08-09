import React from 'react';
import { Drawer, Button } from 'antd';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import laptop from '../../images/laptop.png';

const SideDrawer = ({ children }) => {
  //we receive the content as a props from the parent component.<compoenent>{children}</compoenent>, everything inside the component is the children.
  const dispatch = useDispatch();
  const { drawer, cart } = useSelector((state) => ({ ...state })); // destructure state

  return <Drawer visible={true}>{JSON.stringify(cart)}</Drawer>;
};

export default SideDrawer;
