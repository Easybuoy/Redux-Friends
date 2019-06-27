import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { deleteFriend } from "../../actions/friends";

import { Card, Button } from "../../styles/Styles";

function Friend(props) {
  const { friend, deleteFriend } = props;
  const handleDeleteFriend = id => {
    if (
      window.confirm(
        `Are you sure you want to remove ${friend.name} as your friend?`
      )
    ) {
      deleteFriend(id);
    }
  };
  const { id, name, age, email } = friend;
  return (
    <Card>
      <p>Friend Name: {name}</p>
      <p>Friend Age: {age}</p>
      <p>Friend Email: {email}</p>
      <Link to={`/friend/${id}`}>
        <Button>Update Friend</Button>
      </Link>
      <Button onClick={() => handleDeleteFriend(id)}>Delete Friend</Button>
    </Card>
  );
}

export default connect(
  null,
  {deleteFriend}
)(Friend);
