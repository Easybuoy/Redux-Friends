import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import { Navbar as StyledNavbar } from "../../styles/Styles";

function Navbar(props) {
  return props.auth.isAuthenticated ? (
    <StyledNavbar>
      <Link className="nav-item" to="/">
        FRIENDS
      </Link>
      <Link className="nav-item" to="/addfriend">
        ADD FRIEND
      </Link>
    </StyledNavbar>
  ) : null;
}

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps)(Navbar);
