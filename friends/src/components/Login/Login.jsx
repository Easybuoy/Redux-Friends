import React from "react";
import { connect } from "react-redux";
import { loginUser } from "../../actions/auth";

function Login(props) {
  console.log(props);

  if (props.auth.isAuthenticated) {
    props.history.push("/");
  }

  const username = React.createRef();
  const password = React.createRef();

  return (
    <div>
      <input ref={username} placeholder="Enter Email" />
      <input ref={password} placeholder="Enter Password" />
      <button
        onClick={() => {
          props.loginUser(username.current.value, password.current.value);
        }}
      >
        Submit
      </button>
    </div>
  );
}

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { loginUser }
)(Login);
