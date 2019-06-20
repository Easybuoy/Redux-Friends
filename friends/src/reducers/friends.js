import { GET_FRIENDS, ADD_FRIEND } from "../actions/types";

const INITIAL_STATE = {
  friends: [],
  newFriend: false
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GET_FRIENDS:
      return {
        ...state,
        friends: action.payload
      };
    case ADD_FRIEND:
      return {
        ...state,
        newFriend: true
      };

    default:
      return state;
  }
};
