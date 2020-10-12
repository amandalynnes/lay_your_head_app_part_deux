import React from "react"
import { Form, Input, Button } from "antd";
import { auth } from "../../firebase"
import * as firebase from "firebase/app"
import { UserOutlined, LockOutlined } from "@ant-design/icons";

const LoginForm = () => {
    const [form] = Form.useForm();
    const googleSignUp = () => {
      const provider = new firebase.auth.GoogleAuthProvider();
      auth.signInWithPopup(provider);
    }
  
    
    const onFinish = (values) => {
      firebase.auth().signInWithEmailAndPassword(values.username, values.password).catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
          console.log({errorCode, errorMessage})
      })
    };
    return <Form
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
      <Button type="link" htmlType="button">
        New User? Sign Up Here
    </Button>
      <br />
      <Button onClick={googleSignUp}>Login with Google!</Button>
    </Form>
    {/* Link the following button to the registration page */ }
    {/* Link the following button to Google login */ }
  }

  export default LoginForm