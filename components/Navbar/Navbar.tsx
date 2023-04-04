import React, { useState } from "react";
import Image from "next/image";

import logo from "../../assets/images/logo.svg";

import type { MenuProps } from "antd";
import { Button, Menu, Row, Col } from "antd";

import {
  AppstoreOutlined,
  ContainerOutlined,
  DesktopOutlined,
  MailOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  PieChartOutlined,
} from "@ant-design/icons";

type MenuItem = Required<MenuProps>["items"][number];

function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[],
  type?: "group"
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
    type,
  } as MenuItem;
}

const items: MenuItem[] = [
  getItem("Home", "1", <PieChartOutlined />),
  getItem("the hut", "2", <DesktopOutlined />),
  getItem("The area", "3", <ContainerOutlined />),
  getItem("Booking", "4", <ContainerOutlined />),
  getItem("About us", "5", <ContainerOutlined />),
];

function Navbar() {
  const [collapsed, setCollapsed] = useState(false);

  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
  };

  return (
    <div className="component">
      <Row justify={"center"}>
        <Col span={24}>
          <Image src={logo} alt={"logo"} height={50} width={50} />
          <div style={{ width: 256 }}>
            <Button
              type="primary"
              onClick={toggleCollapsed}
              style={{ marginBottom: 16 }}
            >
              {collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            </Button>
            <Menu
              defaultSelectedKeys={["1"]}
              defaultOpenKeys={["sub1"]}
              mode="inline"
              theme="dark"
              inlineCollapsed={collapsed}
              items={items}
            />
          </div>
        </Col>
      </Row>
    </div>
  );
}

export default Navbar;
