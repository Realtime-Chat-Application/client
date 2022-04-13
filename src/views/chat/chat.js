import React, { useEffect, useState } from "react";
import { Card, Typography, Col, Form, Input, Button, Row } from 'antd';
import './chat.scss';

const ChatPage = ({ room, socket, username }) => {
  const [messageList, setMessageList] = useState([]);
  const [form] = Form.useForm();

  console.log(JSON.parse(localStorage.getItem('userdata')));

  const sendMessage = async (data) => {
    if (data.message !== "") {
      const messageData = {
        room: room,
        author: username,
        message: data.message,
        time: new Date(Date.now()).getHours() + ":" + new Date(Date.now()).getMinutes(),
      }      
      await socket.emit("send_message", messageData);
      setMessageList((list) => [...list, messageData]);
      form.resetFields();
    }
  }

  useEffect(() => {
    socket.on('receive_message', (data) => {
      setMessageList((list) => [...list, data]);
    });
  }, [socket]);

  return (
    <>
      <Col style={{ textAlign: 'center' }}>
        <Typography.Title level={3}>
          Chat
        </Typography.Title>
      </Col>
      <Card className="chat-contatiner">
        <Col className="chat-title">
          <Typography.Title className="title-text" level={4}>{room}</Typography.Title>
        </Col>
        <Card>
          <Row className="message-row">
            {messageList.map((messageData) => {
              if (messageData.author === username) {
                return (
                  <>
                    <Col offset={14} span={10} className="message-col-right">{messageData.message}</Col>
                  </>
                  )
              } else {
                return <Col span={10} className="message-col-left">{messageData.message}</Col>
              }
            })}
          </Row>
        </Card>
      </Card>
      <Card className="send-contatiner">
        <Form
          onFinish={sendMessage}
          hideRequiredMark
          form={form}
        >          
          <Input.Group compact>
            <Form.Item
              name="message"
              style={{ width: 'calc(100% - 66px)'}}
            >
              <Input placeholder="Message" />
            </Form.Item>
            <Form.Item>
              <Button className="form-btn" type="primary" htmlType="submit">
                Send
              </Button>
            </Form.Item>
          </Input.Group>          
        </Form>
      </Card>
    </>
  );
}

export default ChatPage;