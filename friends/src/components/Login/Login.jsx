import React from "react";
import { connect } from "react-redux";
import { loginUser } from "../../actions/auth";
import { Form, Button } from "../../styles/Styles";
import { toast } from 'react-toastify';
function Login(props) {
  console.log(props);

  if (props.auth.isAuthenticated) {
    props.history.push("/");
  }

  const username = React.createRef();
  const password = React.createRef();

  const submit = e => {
    e.preventDefault();
    props.loginUser(username.current.value, password.current.value);
    // toast.success('Login Successfully')
  };
  return (
    <Form  onSubmit={submit}> 
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
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { loginUser }
)(Login);
