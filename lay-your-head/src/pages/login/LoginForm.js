import React, { useState } from "react";
import { Form, Input, Button, Alert } from "antd";
import { auth } from "../../firebase";
import * as firebase from "firebase/app";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import "../../components/RegisterForm.css"
const LoginForm = () => {
  const [form] = Form.useForm();
  const [message, setMessage] = useState(false)
  const googleSignUp = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    auth.signInWithPopup(provider);
  };

  const onFinish = async (values) => {
    setMessage(false)
    firebase.auth().signInWithEmailAndPassword(values.username, values.password).catch(error => {
      setMessage(error.message)
    })
  };
  return (
    <>
      <h2>Find shelters near you.
        <br />
        Because <strong>you</strong> deserve a place to lay your head.</h2>

      <br />
      <Form
        form={form}
        className="form"
        layout="vertical"
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
        {message ? <Alert className="error" type="error" message={message} showIcon /> : null}
        <Form.Item shouldUpdate={true}>
          {() => (
            <Button
              type="primary"
              htmlType="submit"
              disabled={
                !form.isFieldsTouched(true) ||
                form.getFieldsError().filter(({ errors }) => errors.length).length
              }
            >
              Sign in
            </Button>
          )}
        </Form.Item>
        <Button type="link" htmlType="button" href="/register">
          New User? Sign Up Here
      </Button>
        <br />
        <Button onClick={googleSignUp}>Login with Google!</Button>
      </Form>
    </>
  );
};

export default LoginForm;
