import React from "react";
import { Redirect } from "react-router-dom";

const BaseLayout = (props) => {
  if (props.currentUser) {
    return (
      <div>
        <h1>Base layout</h1>
      </div>
    )
  } else {
    return <Redirect to="/auth" />
  }
}

export default BaseLayout;

