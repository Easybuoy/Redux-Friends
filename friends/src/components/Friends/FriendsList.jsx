import React, { Component } from "react";
import { connect } from "react-redux";
import { Triple } from "react-preloading-component";

import Friend from "./Friend";
import { CardGroup, H1, PreLoader } from "../../styles/Styles";
import { getFriends } from "../../actions/friends";

class FriendsList extends Component {
  componentDidMount() {
    this.props.getFriends();
  }

  render() {
    console.log(this.props);
    const { friends } = this.props.friends;
    const { loading } = this.props.loading;

    if (loading) {
      return (
        <PreLoader>
          <Triple color="#3a7ca5" size={80} />
        </PreLoader>
      );
    }
    return (
      <CardGroup>
        <H1>Friends</H1>
        {friends.map(friend => (
          <Friend
            friend={friend}
            key={friend.id}
            handleDeleteFriend={this.handleDeleteFriend}
          />
        ))}
      </CardGroup>
    );
  }
}

const mapStateToProps = state => ({
  friends: state.friends,
  loading: state.loading
});

export default connect(
  mapStateToProps,
  { getFriends }
)(FriendsList);
