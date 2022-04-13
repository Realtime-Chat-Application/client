import React from "react";
import { Card, Typography, Col } from 'antd';

const ChatPage = () => {
  console.log(JSON.parse(localStorage.getItem('userdata')));
  return (
    <Card className="chat-contatiner">
      <Col style={{ textAlign: 'center' }}>
        <Typography.Title level={3}>
          Chat
        </Typography.Title>
      </Col>
    </Card>
  );
}

export default ChatPage;