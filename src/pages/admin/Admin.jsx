import React from "react";
import {
  Layout,
  Menu,
  Breadcrumb,
  Space,
  Table,
  Tag,
  Button,
  Tooltip,
} from "antd";
import {
  UserOutlined,
  LaptopOutlined,
  NotificationOutlined,
} from "@ant-design/icons";
import { useLocation } from "react-router-dom";

const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;
const columns = [
  {
    title: "Name",
    dataIndex: "name",
    key: "name",
    render: (text) => <a>{text}</a>,
  },

  {
    title: "Password",
    dataIndex: "password",
    key: "password",
  },
  {
    title: "Address",
    dataIndex: "address",
    key: "address",
  },
  {
    title: "Role",
    key: "tags",
    dataIndex: "tags",
    render: (_, { tags }) => (
      <>
        {tags.map((tag) => {
          let color = tag.length > 5 ? "geekblue" : "green";
          if (tag === "loser") {
            color = "volcano";
          }
          return (
            <Tag color={color} key={tag}>
              {tag.toUpperCase()}
            </Tag>
          );
        })}
      </>
    ),
  },
  {
    title: "Action",
    key: "action",
    render: (_, record) => (
      <Space size="middle">
        <Tooltip placement="top" title={"Редагувати користувача"}>
          <Button type="primary">Edit</Button>
        </Tooltip>
        <Tooltip placement="top" title={"Забанити користувача "}>
          <Button type="default">Ban</Button>
        </Tooltip>
        <Tooltip placement="top" title={"Видалити користувача"}>
          <Button danger>Delete</Button>
        </Tooltip>
      </Space>
    ),
  },
];
const data = [
  {
    key: "1",
    name: "Danil Tsapok",
    password: "12364158123",
    address: "danilTsapok@gmail.com",
    tags: ["User"],
  },
  {
    key: "2",
    name: "Danil Tsapok",
    password: "234352",
    address: "danilTsapok@gmail.com",
    tags: ["user"],
  },
  {
    key: "3",
    name: "Danil Tsapok",
    password: "12364158123",
    address: "danilTsapok@gmail.com",
    tags: ["user"],
  },
  {
    key: "3",
    name: "Danil Tsapok",
    password: "12364158123",
    address: "danilTsapok@gmail.com",
    tags: ["user"],
  },
  {
    key: "3",
    name: "Danil Tsapok",
    password: "12364158123",
    address: "danilTsapok@gmail.com",
    tags: ["user"],
  },
  {
    key: "3",
    name: "Danil Tsapok",
    password: "12364158123",
    address: "danilTsapok@gmail.com",
    tags: ["user"],
  },
  {
    key: "3",
    name: "Danil Tsapok",
    password: "12364158123",
    address: "danilTsapok@gmail.com",
    tags: ["user"],
  },
  {
    key: "3",
    name: "Danil Tsapok",
    password: "12364158123",
    address: "danilTsapok@gmail.com",
    tags: ["user"],
  },
  {
    key: "3",
    name: "Danil Tsapok",
    password: "12364158123",
    address: "danilTsapok@gmail.com",
    tags: ["user"],
  },
  {
    key: "3",
    name: "Danil Tsapok",
    password: "12364158123",
    address: "danilTsapok@gmail.com",
    tags: ["user"],
  },
  {
    key: "3",
    name: "Danil Tsapok",
    password: "12364158123",
    address: "danilTsapok@gmail.com",
    tags: ["user"],
  },
  {
    key: "3",
    name: "Danil Tsapok",
    password: "12364158123",
    address: "danilTsapok@gmail.com",
    tags: ["user"],
  },
  {
    key: "3",
    name: "Danil Tsapok",
    password: "12364158123",
    address: "danilTsapok@gmail.com",
    tags: ["user"],
  },
  {
    key: "3",
    name: "Danil Tsapok",
    password: "12364158123",
    address: "danilTsapok@gmail.com",
    tags: ["user"],
  },
  {
    key: "3",
    name: "Danil Tsapok",
    password: "12364158123",
    address: "danilTsapok@gmail.com",
    tags: ["user"],
  },
];
const Admin = () => {
  return (
    <Layout>
      <Header className="header">
        <div className="logo" />
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={["2"]}>
          <Menu.Item key="1">Navigation 1</Menu.Item>
          <Menu.Item key="2">Navigation 2</Menu.Item>
          <Menu.Item key="3">Navigation 3</Menu.Item>
        </Menu>
      </Header>
      <Layout>
        <Sider width={200} className="site-layout-background">
          <Menu
            mode="vertical"
            defaultSelectedKeys={["1"]}
            defaultOpenKeys={["sub1"]}
            style={{ height: "100%", borderRight: 0 }}
          >
            <SubMenu key="sub1" icon={<UserOutlined />} title="User">
              <Menu.Item key="1">User 1</Menu.Item>
              <Menu.Item key="2">User 2</Menu.Item>
              <Menu.Item key="3">User 3</Menu.Item>
            </SubMenu>
            <SubMenu key="sub2" icon={<LaptopOutlined />} title="Device">
              <Menu.Item key="4">Device 1</Menu.Item>
              <Menu.Item key="5">Device 2</Menu.Item>
              <Menu.Item key="6">Device 3</Menu.Item>
            </SubMenu>
            <SubMenu
              key="sub3"
              icon={<NotificationOutlined />}
              title="Notification"
            >
              <Menu.Item key="7">Notification 1</Menu.Item>
              <Menu.Item key="8">Notification 2</Menu.Item>
              <Menu.Item key="9">Notification 3</Menu.Item>
            </SubMenu>
          </Menu>
        </Sider>
        <Layout style={{ padding: "0 24px 24px" }}>
          <Breadcrumb style={{ margin: "16px 0" }}>
            <Breadcrumb.Item>Home</Breadcrumb.Item>
            <Breadcrumb.Item>User</Breadcrumb.Item>
            <Breadcrumb.Item>User 1</Breadcrumb.Item>
          </Breadcrumb>
          <Content
            className="site-layout-background"
            style={{
              padding: 24,
              margin: 0,
              minHeight: 280,
            }}
          >
            <h1>Admin Page Content</h1>

            <Table columns={columns} dataSource={data} />
          </Content>
        </Layout>
      </Layout>
    </Layout>
  );
};

export default Admin;
