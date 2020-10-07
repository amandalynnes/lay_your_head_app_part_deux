import React from 'react';
import '../../src/App.css';
import 'antd/dist/antd.css';
import { Input, Space, Button } from 'antd';
import { EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';



const RegistrationForm = () => {

    return (
        <div className="Registration">
            <Space direction="vertical">
                <Input placeholder="email" />
                <Input placeholder="username" />
                <Input.Password
                    placeholder="password"
                    iconRender={visible => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
                />
                <Button type="primary">Back to sign in</Button>
                <Button type="primary">Sign up</Button>
            </Space>
        </div>
    )
};

export default RegistrationForm;