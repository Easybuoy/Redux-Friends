import React from "react";
import { connect } from "react-redux";
import { loginUser } from "../../actions/auth";
import { Form, Button } from "../../styles/Styles";
import { toast } from "react-toastify";
function Login(props) {
  if (props.auth.isAuthenticated) {
    props.history.push("/");
  }

  if (props.error.error.length > 0) {
    toast.error(props.error.error);
  }

  const username = React.createRef();
  const password = React.createRef();

  const submit = e => {
    e.preventDefault();
    props.loginUser(username.current.value, password.current.value);
  };

  return (
    <Form onSubmit={submit}>
      <input ref={username} placeholder="Enter Email" type="text" required />
      <input
        ref={password}
        placeholder="Enter Password"
        type="password"
        required
      />
      <Button>Login</Button>
    </Form>
  );
}

const mapStateToProps = state => ({
  auth: state.auth,
  error: state.error
});

export default connect(
  mapStateToProps,
  { loginUser }
)(Login);
