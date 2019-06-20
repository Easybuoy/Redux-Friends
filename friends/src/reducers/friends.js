import { GET_FRIENDS } from "../actions/types";

const INITIAL_STATE = {
  friends: []
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GET_FRIENDS:
      return {
        ...state,
        friends: action.payload
      };

    default:
      return state;
  }
};
