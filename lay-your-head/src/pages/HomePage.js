import React, { useContext, useState } from 'react';
import '../HomePage.css';
import { PageHeader, Button, Card, Avatar, Space } from 'antd';
import { Form, Input } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import Api from "../utils/api";
import { ShelterComponent } from "../components/ShelterComponent"
import shelterApi from "../utils/shelterApi";
import { AuthContext } from "../authContext"
import SignOut from "./login/SignOut"
import * as firebase from "firebase/app"


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
  const {user: userInfo, updateFirebaseUser} = useContext(AuthContext);
  const {deleteUser} = useContext(AuthContext);
  const [isEditingProfile, setEditingProfile] = useState(false)
  const [profileEdit, setProfileEdit] = useState({
    displayName: userInfo.displayName,
    email: userInfo.email
  })
  const updateProfileValues = (ev) => {
    const name = ev.target.name;
    const value = ev.target.value
    setProfileEdit(values => ({ ...values, [name]: value }))
  }

  const updateProfile = async () => {
    try {
      await firebase.auth().currentUser.updateProfile(profileEdit);
      await updateFirebaseUser();
      setEditingProfile(false);
    } catch (err) {
      // maybe set some sort of error in another state here???
    }
  }
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
          {isEditingProfile ? (<>
            <input type="text" value={profileEdit.displayName} name="displayName" onChange={updateProfileValues} />
            <input type="text" value={profileEdit.email} name="email" onChange={updateProfileValues} />
            {/* <p>Phone Number</p> */}
            <Button key="1" type="secondary" onClick={updateProfile}>
              Save Profile
       </Button>
       <Button key="1" type="secondary" onClick={deleteUser}>
              Delete User
       </Button>
       </>) : (<><p>{userInfo.email}</p>
              <p>{userInfo.displayName}</p>
              {/* <p>Phone Number</p> */}
              <Button key="1" type="secondary" onClick={() => setEditingProfile(true)}>
                Edit Profile
       </Button></>)}
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