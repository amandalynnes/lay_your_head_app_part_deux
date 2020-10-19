import React, {  useContext } from 'react';
import '../HomePage.css';
import { PageHeader, Button, Card, Avatar, Space} from 'antd';
import {  Form, Input  } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import Api from "../utils/api";
import {ShelterComponent} from "../components/ShelterComponent"
import shelterApi from "../utils/shelterApi";
import {AuthContext} from "../authContext"
import SignOut from "./login/SignOut"


// const [messages, setMessages] = useState([])
// useEffect(() => {
//   let myMessages = []
//   Api.getMessages()
// .then((querysnapshot) => {
// querysnapshot.forEach((message) => {
// console.log(message.id, message.data())
// myMessages.push(message.data())
// })
// setMessages(myMessages)
// })
// }, [])

Api.getMessages()
.then((querysnapshot) => {
querysnapshot.forEach((message) => {
console.log(message.id, message.data())
})
})


shelterApi()

function HomePage() {
  const userInfo = useContext(AuthContext);
  console.log(userInfo)
  if (!userInfo) {
    return <h1>Please Sign In</h1>;
  }
  return (
    <React.Fragment>
    <br />
   <PageHeader
     title="Because you deserve a place to lay your head"
     extra={[
       SignOut()
    ]}
   >
   </PageHeader>

   <Space direction="horizontal">
    
    <Card size="small" title="Profile" style={{ width: 300 }}>
    <Avatar style={{
        color: 'white',
        backgroundColor: 'transparent',
      }} size={64} icon={<UserOutlined />} />
      <p>{userInfo.email}</p>
      <p>{userInfo.displayName}</p>
      {/* <p>Phone Number</p> */}
      <Button key="1" type="secondary">
         Edit Profile
       </Button>
    </Card>
    {/* <Card title="Find Shelters Near You" style={{ width: 300 }}>
    <Form>
    <Form.Item
        name={['user', 'address']}
      
      >
        <Input placeholder="Address"/>
      </Form.Item>
      <Form.Item
        name={['user', 'state']}
        rules={[
          {
            type: 'state',
          },
        ]}
      >
        <Input placeholder="State"/>
      </Form.Item>
      <Form.Item
        name={['user', 'zipcode']}
      >
        <Input placeholder="Zipcode"/>
      </Form.Item>
  
      
      <Form.Item>
        <Button type="third" htmlType="submit">
          Submit
        </Button>
        </Form.Item>
    </Form>
      </Card> */}
      </Space>
    <ShelterComponent />
    </React.Fragment>
  );
}

export default HomePage;