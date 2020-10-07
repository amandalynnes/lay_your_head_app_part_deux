import React from 'react';
import '../../src/App.css';
import 'antd/dist/antd.css';
import { Input, Space, Button, Image } from 'antd';
import { EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';
import RegistrationForm from '../components/RegistrationForm';



const Registration = () => {

  return (
    <>
      
        <header>
          <Image width={1450} height={250} 
      src="https://www.artech.com/wp-content/uploads/2018/08/iStock-668218790_Community-Building-web.jpg"/>


          <h2>Because <strong>you</strong> deserve a place to lay your head.</h2>
          <h4>Register Here</h4>
        </header>
        <RegistrationForm />
      
    </>
  )
};

export default Registration;