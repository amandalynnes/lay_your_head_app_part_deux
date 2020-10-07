import React from 'react';
import '../../src/App.css';
import 'antd/dist/antd.css';
import { Input, Space, Button, Layout } from 'antd';
import { EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';

const { Header, Footer, Sider, Content } = Layout;

const Registration = () => (

  <div className="Registration">

    <Layout>
      <Header>
        <h1>Lay Your Head</h1>
        <h3>Because you deserve a place to</h3>
        <img src="https://www.google.com/imgres?imgurl=https%3A%2F%2Fpositivepsychology.com%2Fwp-content%2Fuploads%2Ffamily-therapy.png&imgrefurl=https%3A%2F%2Fpositivepsychology.com%2Ffamily-therapy%2F&tbnid=yhGD8JT3tVJpRM&vet=12ahUKEwi9vLSEpqPsAhWNMlMKHfNHCyoQMygVegUIARD3AQ..i&docid=SUwDgcToO1-0eM&w=800&h=400&q=family&safe=active&ved=2ahUKEwi9vLSEpqPsAhWNMlMKHfNHCyoQMygVegUIARD3AQ"/>
      </Header>
      <Content>
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
        </Content>
        <Footer>
            Place something here?
        </Footer>
  </Layout>
  </div>
);

export default Registration;