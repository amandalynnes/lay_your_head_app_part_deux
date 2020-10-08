import React from 'react';
import '../../src/App.css';
import 'antd/dist/antd.css';
import { Input, Space, Button } from 'antd';
import { EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';
import Form from 'antd/lib/form/Form';



const RegistrationForm = () => {

    return (
        <div className="Registration">
            <Form>
                <Space direction="vertical">
                    <Input placeholder="email" />
                    <Input placeholder="username" />
                    <Input.Password
                        placeholder="password"
                        iconRender={visible => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
                    />
                    <Button type="primary">Sign up</Button>
                    <Button type="link" htmlType="button">Back to sign in</Button>
                </Space>
            </Form>
        </div>
    )
};

export default RegistrationForm;