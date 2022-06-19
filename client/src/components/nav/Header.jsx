import React, { useState } from "react";
import { Menu } from "antd";
import {
  AppstoreOutlined,
  SettingOutlined,
  UserOutlined,
  UserAddOutlined,
} from "@ant-design/icons";
//const { SubMenu,} = Menu; //return Menu.SubMenu, we destructure Menu we have imported before
import { Link } from "react-router-dom";

const items = [
  {
    label: "Home",
    key: "home",
    icon: (
      <Link to="/">
        <AppstoreOutlined />
      </Link>
    ),
    className: "",
  },
  {
    label: "Register",
    key: "register",
    icon: (
      <Link to="/register">
        <UserAddOutlined />
      </Link>
    ),
    className: "float-right",
  },
  {
    label: "Login",
    key: "login",
    icon: (
      <Link to="/login">
        <UserOutlined />
      </Link>
    ),
    className: "float-right",
  },

  {
    label: "Username",
    key: "SubMenu",
    icon: <SettingOutlined />,
    className: "",

    children: [
      {
        label: "Option 1",
        key: "setting:1",
      },
      {
        label: "Option 2",
        key: "setting:2",
      },
    ],
  },
];

const Header = () => {
  const [current, setCurrent] = useState("home");

  const onClick = (e) => {
    //console.log("click ", e);
    setCurrent(e.key);
  };

  return (
    <Menu
      onClick={onClick}
      selectedKeys={[current]}
      mode="horizontal"
      items={items}
    />
  );
};

export default Header;
