import { GET_FRIENDS } from "./types";
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

      dispatch(setLoading());
        dispatch({type: GET_FRIENDS, payload: res.data})
    })
    .catch(() => { 
      dispatch(setLoading());
      dispatch(setError("Unable to delete friend, Please Try Again"));
    });
};
