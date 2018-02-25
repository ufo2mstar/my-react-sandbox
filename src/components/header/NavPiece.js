import React from 'react'
import {
  Link,
  // NavLink,
} from 'react-router-dom'

import {
  NavItem,
  NavLink,
} from 'reactstrap';


// The Header creates links that can be used to navigate
// between routes.


const NavPiece = props => (
  <div>
    {/*<NavItem active={props.location == props.to}>*/}
    {/* terrible hack! */}
    <NavItem active={document.location.toString().includes(props.to)}>
    {/*<NavItem active={props.path.includes(props.to)}>*/}
    {/*<NavItem>*/}
      <NavLink tag={Link} to={props.to}>
        {props.text || "donno page"}
      </NavLink>
    </NavItem>
  </div>
)

export default NavPiece
