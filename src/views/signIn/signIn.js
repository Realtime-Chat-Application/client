import React, { useState } from "react";
import { Card, Row, Form , Input, Checkbox, Button, Typography, Col, message } from 'antd';
import io from 'socket.io-client';
import './signIn.scss';
import ChatPage from "../chat/chat";
import getuserData from "../../data/functions/getuser";

const socket = io.connect('https://release.d1pmvx2d352l3v.amplifyapp.com');

const SignInPage = () => { 
  const [form] = Form.useForm();
  const [userLoged, setUserLoged] = useState(false);
  const [userData, setUserData] = useState({});
 
  const onSignIn = async (values) => {
    message.loading('Please wait..')
    await getuserData(values).then((res) => {      
      if (res) {
        setUserData({username: values.username, loged: true, room: values.roomId});
        setUserLoged(true);
        socket.emit('join_room', values.roomId);
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
        <ChatPage socket={socket} username={userData.username} room={userData.room}/>
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
              <Form.Item
                label="Room Id"
                name="roomId"
                // rules={[
                //   {
                //     required: true,
                //     message: 'Please input your username!',
                //   },
                // ]}
              >
                <Input />
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