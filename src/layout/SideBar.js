import React from "react";
import {
  Nav,
  NavLink
} from "reactstrap";

const SideBar = (props) => {
  function activeRoute(routeName) {
    return props.location && props.location.pathname.indexOf(routeName) > -1 ? "active" : "";
  }
  var sidebar = React.createRef();
  return (
    <div id="sidebar" className="sidebar">
      <div className="header">
        <p>Choose an option:</p>
      </div>

      <div className="sidebar-wrapper" ref={sidebar}>
        <Nav>
          {props.routes.map((prop, key) => {
            return (
              <li
                className={
                  activeRoute(prop.path) +
                  (prop.pro ? " active-pro" : "")
                }
                key={key}
              >
                <NavLink
                  href={prop.layout + prop.path}
                  className="nav-link"
                >
                  {/* <i className={prop.icon} /> */}
                  {/* <FontAwesomeIcon icon={prop.icon} /> */}
                  <p>{prop.name}</p>
                </NavLink>
              </li>
            );
          })}
        </Nav>
      </div>

    </div>
  )
}

export default SideBar;

