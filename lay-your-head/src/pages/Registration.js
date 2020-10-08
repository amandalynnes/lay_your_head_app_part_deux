import React from 'react';
import '../../src/App.css';
import 'antd/dist/antd.css';
import { Image } from 'antd';
import RegistrationForm from '../components/RegistrationForm';




const Registration = () => {

  return (
    <>
      
        <header>
          <Image width={1450} height={250} 
      src="https://www.artech.com/wp-content/uploads/2018/08/iStock-668218790_Community-Building-web.jpg"/>

        </header>
        <RegistrationForm />
      
    </>
  )
};

export default Registration;