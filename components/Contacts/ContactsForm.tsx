import React from "react";
import { Row, Col, Button, Form, Input, InputNumber } from "antd";

function ContactsForm() {
  const onFinish = (values: any) => {
    console.log(values);
  };

  return (
    <Row justify={"center"}>
      <Col span={22}>
        <Form
          name="nest-messages"
          onFinish={onFinish}
          style={{ maxWidth: 600 }}
        >
          <Form.Item
            name={["user", "name"]}
            label="First Name"
            rules={[{ required: true }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name={["user", "email"]}
            label="Email"
            rules={[{ type: "email" }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name={["user", "age"]}
            label="Age"
            rules={[{ type: "number", min: 0, max: 99 }]}
          >
            <InputNumber />
          </Form.Item>
          <Form.Item name={["user", "website"]} label="Website">
            <Input />
          </Form.Item>
          <Form.Item name={["user", "introduction"]} label="Introduction">
            <Input.TextArea />
          </Form.Item>
          <Form.Item >
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </Col>
    </Row>
  );
}

export default ContactsForm;
