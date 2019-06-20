import { GET_ERRORS } from "../actions/types";

const INITIAL_STATE = {
  error: ""
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GET_ERRORS:
      return {
        ...state,
        error: action.payload
      };

    default:
      return state;
  }
};
