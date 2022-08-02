import React, { useState } from 'react';
import { Modal, Button } from 'antd';
import { toast } from 'react-toastify';
import { useSelector } from 'react-redux';
import { StarOutlined } from '@ant-design/icons';
import { useLocation, useNavigate, useParams } from 'react-router-dom';

const RatingModal = ({ children }) => {
  const { user } = useSelector((state) => ({ ...state }));
  const [modalVisible, setModalVisible] = useState(false);
  const navigate = useNavigate();
  const location = useLocation(); // <-- get current location being accessed
  //const { slug } = useParams();
  //console.log('slug', slug);
  //console.log(location);

  const handleModal = () => {
    if (user && user.token) {
      setModalVisible(true);
    } else {
      navigate('/login', { state: { from: location } }); // <-- pass in route state
      // navigate('/login', { state: { from: `/product/${slug}` } });
    }
  }; // slug is the name we use in the backend to identify the product. we have to use the same name in the frontend to access the params.

  return (
    <>
      <div onClick={handleModal}>
        <StarOutlined className="text-danger" /> <br />{' '}
        {user ? 'Leave rating' : 'Login to leave rating'}
      </div>
      <Modal
        title="Leave your rating"
        centered
        visible={modalVisible}
        onOk={() => {
          setModalVisible(false);
          toast.success('Thanks for your review. It will apper soon');
        }}
        onCancel={() => setModalVisible(false)}
      >
        {children}
      </Modal>
    </>
  );
};

export default RatingModal;
