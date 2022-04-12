import React from "react";
import { Card, Row, Form , Input, Checkbox, Button, Typography, Col } from 'antd';
import {
  useHistory, useLocation,
} from 'react-router-dom';
import './signIn.scss';

const SignInPage = () => {
  const history = useHistory();
  const location = useLocation();

  const { from } = location.state || { from: { pathname: '/chat' } };

  const onSignIn = () => {
    history.replace(from, { from: 'chat' });
  }
  return (
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
            name="remember"
            valuePropName="checked"
          >
            <Checkbox>Remember me</Checkbox>
          </Form.Item>

          <Form.Item>
            <Button className="form-btn" type="primary" htmlType="submit">
              Sign In
            </Button>
          </Form.Item>
        </Form>
      </Card>
    </Row>
  );
}

export default SignInPage;