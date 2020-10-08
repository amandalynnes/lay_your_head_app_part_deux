import React, { useState, useEffect } from "react";
import "./Login.css";
import "antd/dist/antd.css";
import { Form, Input, Button, Image } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";

export default function Login() {
  const [form] = Form.useForm();
  const [, forceUpdate] = useState(); // To disable submit button at the beginning.

  useEffect(() => {
    forceUpdate({});
  }, []);

  const onFinish = (values) => {
    console.log("Finish:", values);
  };

  return (
    <div className="login">
      {/*
        The header with the hero image and text should be a separate component,
        which would be displayed above this login form component on our login
        page/view
       */}
      <h1>Lay Your Head</h1>
      <h3>Because you deserve a place to lay your head</h3>
      {/* Placeholder Image */}
      <Image
        width="100%"
        height={200}
        src="error"
        fallback="https://www.dailynews.com/wp-content/uploads/2020/03/TDB-L-NEWSHELTER-0303-032-SV-5.jpg"
      />

      <br />
      <Form
        form={form}
        className="form"
        name="horizontal_login"
        onFinish={onFinish}
      >
        <Form.Item
          name="username"
          rules={[
            {
              required: true,
              message: "Please input your username!",
            },
          ]}
        >
          <Input
            prefix={<UserOutlined className="site-form-item-icon" />}
            placeholder="Login"
          />
        </Form.Item>
        <Form.Item
          name="password"
          rules={[
            {
              required: true,
              message: "Please input your password!",
            },
          ]}
        >
          <Input
            prefix={<LockOutlined className="site-form-item-icon" />}
            type="password"
            placeholder="Password"
          />
        </Form.Item>
        <Form.Item shouldUpdate={true}>
          {() => (
            <Button
              type="primary"
              htmlType="submit"
              disabled={
                !form.isFieldsTouched(true) ||
                form.getFieldsError().filter(({ errors }) => errors.length)
                  .length
              }
            >
              Sign in
            </Button>
          )}
        </Form.Item>
      </Form>
      {/* Link the following button to the registration page */}
      <Button type="link" htmlType="button">
        New User? Sign Up Here
      </Button>
      {/* Link the following button to Google login */}
      <Button>Login with Google!</Button>
    </div>
  );
}
