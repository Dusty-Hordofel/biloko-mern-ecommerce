import React from 'react';
import { Card } from 'antd';
import laptop from '../../images/laptop.png';
import { EditOutlined, DeleteOutlined } from '@ant-design/icons';

const { Meta } = Card;

const AdminProductCard = ({ product }) => {
  // destructure
  const { title, description, images } = product;

  return (
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
        <EditOutlined className="text-warning" />,
        <DeleteOutlined className="text-danger" />,
      ]}
    >
      <Meta
        title={title}
        description={`${description && description.substring(0, 40)}...`} //substring allows to show only 40 characters.
      />
    </Card>
  );
};

export default AdminProductCard;
