import React, { useState } from "react";
import { Menu } from "antd";
import {
  MailOutlined,
  AppstoreOutlined,
  SettingOutlined,
} from "@ant-design/icons";
const { SubMenu } = Menu; //return Menu.SubMenu, we destructure Menu we have imported before

const items = [
  {
    label: "Home",
    key: "mail",
    icon: <MailOutlined />,
  },
  //   {
  //     label: "Navigation Two",
  //     key: "app",
  //     icon: <AppstoreOutlined />,
  //     disabled: true,
  //   },
  {
    label: "Register",
    key: "SubMenu",
    icon: <SettingOutlined />,
    // children: [
    //   {
    // type: "group",
    // label: "Item 1",
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
    //   },
    //   {
    //     type: "group",
    //     label: "Item 2",
    //     children: [
    //       {
    //         label: "Option 3",
    //         key: "setting:3",
    //       },
    //       {
    //         label: "Option 4",
    //         key: "setting:4",
    //       },
    //     ],
    //   },
    // ],
  },
  //   {
  //     label: (
  //       <a href="https://ant.design" target="_blank" rel="noopener noreferrer">
  //         Navigation Four - Link
  //       </a>
  //     ),
  //     key: "alipay",
  //   },
];

const Header = () => {
  const [current, setCurrent] = useState("");

  const onClick = (e) => {
    console.log("click ", e);
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
