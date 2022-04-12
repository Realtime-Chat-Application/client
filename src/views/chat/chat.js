import React from "react";
import { Card, Typography, Col } from 'antd';

const ChatPage = () => {
  
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