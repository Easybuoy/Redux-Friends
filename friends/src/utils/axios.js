import axios from "axios";

export default function() {
  const token = localStorage.getItem("token") || null;

  return axios.create({
    headers: {
      //   "Content-Type": "application/json",
      Authorization: `${token}`
    }
  });
}
