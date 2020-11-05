import React from "react";
import { Redirect } from "react-router-dom";
import SideBar from "./SideBar";

const BaseLayout = (props) => {
  if (!props.currentUser) return <Redirect to="/auth" />
  return (
    <div>
      <SideBar {...props} />
      <h1>Base layout</h1>
    </div>
  )
}

export default BaseLayout;

