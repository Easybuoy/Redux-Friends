import { GET_FRIENDS, SET_LOADING } from "./types";
import { setLoading } from "./loading";
import axios from "../utils/axios";

export const getFriends = () => dispatch => {
    dispatch(setLoading());

  axios()
    .get("http://localhost:5000/api/friends")
    .then(res => {
        dispatch({ type: GET_FRIENDS, payload: res.data })
        dispatch(setLoading());
    })
    .catch(err => console.log(err));
};
