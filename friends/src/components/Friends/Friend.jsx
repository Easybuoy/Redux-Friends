import React from "react";
import { Link } from "react-router-dom";
import { Card, Button } from "../../styles/Styles";

export default function Friend({ friend, handleDeleteFriend }) {
  //   console.log(friend);
  const { id, name, age, email } = friend;
  return (
    <Card>
      <p>Friend Name: {name}</p>
      <p>Friend Age: {age}</p>
      <p>Friend Email: {email}</p>
      {/* <Link to={`/friend/${id}`}>
        <Button>Update Friend</Button>
      </Link> */}
      <Button onClick={() => handleDeleteFriend(id)}>Delete Friend</Button>
    </Card>
  );
}
