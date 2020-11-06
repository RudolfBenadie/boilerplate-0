import React from "react";
import { Redirect } from "react-router-dom";
import SideBar from "./SideBar";
import NavBar from "./NavBar";

const BaseLayout = (props) => {
  if (!props.currentUser) return <Redirect to="/auth" />
  return (
    <div id="baseContainer">
      <SideBar {...props} />
      <NavBar {...props} />
    </div>
  )
}

export default BaseLayout;

