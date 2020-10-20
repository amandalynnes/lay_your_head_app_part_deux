import React, { useState, useEffect } from "react";
import "./Login.css";
import "antd/dist/antd.css";
import { auth } from "../../firebase"
import LoginForm from "./LoginForm"
import { useAuthState } from 'react-firebase-hooks/auth';
import HomePage from "../HomePage";

export default function Login() {
  const [, forceUpdate] = useState(); 
  const [user] = useAuthState(auth)
  useEffect(() => {
    forceUpdate({});
  }, []);

  return (
    <>
     <br />
    <div className="login">
      
      { user ? <HomePage /> : <LoginForm />}
    </div>
    </>
  );
}


