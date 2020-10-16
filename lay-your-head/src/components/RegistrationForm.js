import React, { useState, useEffect } from "react";
import "../../src/App.css";
import "antd/dist/antd.css";
import { Form, Input, Button } from "antd";
import { MailOutlined, UserOutlined, LockOutlined } from "@ant-design/icons";
import * as firebase from "firebase/app";
import { useAuthState } from "react-firebase-hooks/auth";
import FormItem from "antd/lib/form/FormItem";
// TODO: Implement redirection to home page after registration
// TODO: Take out username field as firebase takes email and password only.

export default function RegistrationForm() {
  // const [user] = useAuthState()
  const [form] = Form.useForm();
  const [, forceUpdate] = useState(); // To disable submit button at the beginning.
  useEffect(() => {
    forceUpdate({});
  }, []);
  const onFinish = (values) => {
    firebase
      .auth()
      .createUserWithEmailAndPassword(values.email, values.password)
      .catch(function (error) {
        // Handle Errors here.
        let errorCode = error.code;
        let errorMessage = error.message;
        console.log({ errorCode, errorMessage });
      });
  };
  return (
    <div>
      <h2>
        Because <strong>you</strong> deserve a place to lay your head.
      </h2>
      <h4>Register Here</h4>
      <Form
        form={form}
        name="horizontal_login"
        layout="inline"
        onFinish={onFinish}
      >
        <Form.Item
          name="email"
          rules={[
            {
              required: true,
              message: "Please input your email!",
            },
          ]}
        >
          <Input
            prefix={<MailOutlined className="site-form-item-icon" />}
            placeholder="email"
          />
        </Form.Item>
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
            placeholder="username"
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
              Sign in {console.log("The button is being called")}
            </Button>
          )}
        </Form.Item>
        <Button type="link" htmlType="button" href="/">
        Go back to Log in page
      </Button>
      </Form>
    </div>
  );
}
