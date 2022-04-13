import React, { useState } from "react";
import { Card, Row, Form , Input, Checkbox, Button, Typography, Col, message } from 'antd';
import io from 'socket.io-client';
import './signIn.scss';
import ChatPage from "../chat/chat";
import getuserData from "../../data/functions/getuser";

const socket = io.connect('http://localhost:3002');

const SignInPage = () => { 
  const [form] = Form.useForm();
  const [userLoged, setUserLoged] = useState(false);

  const onSignIn = async (values) => {
    message.loading('Please wait..')
    await getuserData(values).then((res) => {      
      if (res) {
        localStorage.setItem('userdata', JSON.stringify({username: values.username, loged: true}));
        setUserLoged(true);
        socket.emit('join_room', res.username);
        message.destroy();
        message.success(`Welcome ${res.username}`);
      } else {
        message.destroy();
        message.error('Invalid login details');
      }
    });
  }
  return (
    <>
      {userLoged ? (
        <ChatPage />
      ) : (
        <Row>
          <Card className="form-container">
            <Col style={{ textAlign: 'center' }}>
              <Typography.Title level={3}>
                Sign in
              </Typography.Title>
            </Col>
            <Form
              layout="vertical"
              hideRequiredMark
              size="large"
              onFinish={onSignIn}
              form={form}
            >
              <Form.Item
                label="Username"
                name="username"
                // rules={[
                //   {
                //     required: true,
                //     message: 'Please input your username!',
                //   },
                // ]}
              >
                <Input />
              </Form.Item>

              <Form.Item
                label="Password"
                name="password"
                // rules={[
                //   {
                //     required: true,
                //     message: 'Please input your password!',
                //   },
                // ]}
              >
                <Input.Password />
              </Form.Item>
              <Form.Item>
                <Button className="form-btn" type="primary" htmlType="submit">
                  Sign In
                </Button>
              </Form.Item>
            </Form>
          </Card>
        </Row>
      )}
    </>
  );
}

export default SignInPage;