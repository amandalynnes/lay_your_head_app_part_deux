import React, { useState, useEffect } from "react";
import "./Login.css";
import "antd/dist/antd.css";
import { auth } from "../../firebase"
import LoginForm from "./LoginForm"
import { useAuthState } from 'react-firebase-hooks/auth';
import HomePage from "../HomePage";


// TODO: Take out username field as firebase takes email and password only.

export default function Login() {
  const [, forceUpdate] = useState(); // To disable submit button at the beginning.
  const [user] = useAuthState(auth)
  useEffect(() => {
    forceUpdate({});
  }, []);

  return (
    <>
     <br />
    <div className="login">
      {/*
        The header with the hero image and text should be a separate component,
        which would be displayed above this login form component on our login
        page/view
       */}
      { user ? <HomePage /> : <LoginForm />}
    </div>
    </>
  );
}


