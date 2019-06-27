import { GET_FRIENDS, ADD_FRIEND } from "./types";
import { setLoading } from "./loading";
import { setError, resetError } from "./error";
import axios from "../utils/axios";

export const getFriends = () => dispatch => {
  dispatch(setLoading());

  axios()
    .get("http://localhost:5000/api/friends")
    .then(res => {
      dispatch(setLoading());
      dispatch({ type: GET_FRIENDS, payload: res.data });
      dispatch(resetError());
    })
    .catch(() => {
      dispatch(setLoading());
      dispatch(setError("Unable to get Friends, Please Try Again"));
    });
};

export const deleteFriend = id => dispatch => {
  dispatch(setLoading());
  axios()
    .delete(`http://localhost:5000/api/friends/${id}`)
    .then(res => {
      dispatch({ type: GET_FRIENDS, payload: res.data });
      dispatch(resetError());
    })
    .catch(() => {
      dispatch(setError("Unable to delete friend, Please Try Again"));
    })
    .finally(() => dispatch(setLoading()));
};

export const addFriend = payload => dispatch => {
  axios()
    .post("http://localhost:5000/api/friends", payload)
    .then(() => dispatch({ type: ADD_FRIEND }))
    .catch(() => dispatch(setError("Unable to add friend, Please Try Again")));
};
