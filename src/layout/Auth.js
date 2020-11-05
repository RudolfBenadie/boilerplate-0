import React from "react";
import { Redirect } from "react-router-dom";

const AuthLayout = (props) => {
  if (props.currentUser) return <Redirect to="/" />
  return (
    <div>
      <h1>Authorisation layout</h1>
    </div>
  )
}

export default AuthLayout;

