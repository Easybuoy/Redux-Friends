import React from "react";
import { toast } from "react-toastify";
import { connect } from "react-redux";

import { Form, Button } from "../../styles/Styles";
import { addFriend } from "../../actions/friends";
function NewFriend(props) {
  const { newFriend } = props.friends;
  const { error } = props.error;

  if (error.length > 0) {
    toast.error(error);
  }

  if (newFriend) {
    props.history.push("/");
  }

  const name = React.createRef();
  const email = React.createRef();
  const age = React.createRef();

  const handleNewFriend = e => {
    e.preventDefault();

    const payload = {
      name: name.current.value,
      email: email.current.value,
      age: age.current.value
    };

    props.addFriend(payload);
  };

  //   if (loading) {
  //     return <div>Loading</div>;
  //   }

  //   if (error) {
  //     return <div>{error}</div>;
  //   }

  //   if (response) {
  //     return <div>{response}</div>;
  //   }

  return (
    <div>
      <Form onSubmit={handleNewFriend}>
        <input ref={name} type="text" placeholder="Name" required />
        <input ref={email} type="email" placeholder="Email" required />
        <input ref={age} type="number" placeholder="Age" required />
        <Button>Add Friend</Button>
      </Form>
    </div>
  );
}

const mapStateToProps = state => ({
  friends: state.friends,
  error: state.error
});

export default connect(
  mapStateToProps,
  { addFriend }
)(NewFriend);
