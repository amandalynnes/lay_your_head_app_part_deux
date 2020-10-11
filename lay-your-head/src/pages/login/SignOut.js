import React from "react"
import { auth } from "../../firebase"
import {  Button } from "antd";

export default function SignOut() {
    return auth.currentUser && (
      <Button className="sign-out" onClick={() => auth.signOut()}>Sign Out</Button>
    )
  }