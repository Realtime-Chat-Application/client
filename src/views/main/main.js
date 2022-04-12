import React, { useState } from "react";
import {
  Route,
  Switch,
  Link,
} from 'react-router-dom';
import {
  Layout, Menu,
} from 'antd';
import SignInPage from "../signIn/signIn";
import './main.scss';
import ChatPage from "../chat/chat";

const MainPage = () => {
  const {
    Header, Content,
  } = Layout;

  const [currentItem, setCurrentItem] = useState('dashboard');

  const onMenuSelect = (e) => {
    setCurrentItem(e.key);
  }
  return (
    <Layout className="site-layout site-layout-background">
      <Header>
        <Menu onClick={onMenuSelect} selectedKeys={currentItem} mode="horizontal" on>
          <Menu.Item key="dashboard">
            <Link to="/">Dashboard</Link>
          </Menu.Item>
          <Menu.Item key="signin">
            <Link to="/signup">Sign up</Link>
          </Menu.Item>
          <Menu.Item key="signup">
            <Link to="/signin">Sign in</Link>
          </Menu.Item>
        </Menu>
      </Header>
      <Layout className="chat-layout">
        <Content
          style={{ overflow: 'auto' }}
        >
          <Switch>
            <Route path="/" exact>{null}</Route>
            <Route path="/signin"><SignInPage /></Route>
            <Route path="/chat"><ChatPage /></Route>
          </Switch>
        </Content>
      </Layout>
    </Layout>
  );
}

export default MainPage;