import axios from "axios";

export const loginCall = async (userCredentials, dispatch) => {
  dispatch({
    type: "LOGIN_START",
  });

  const apiURL = process.env.REACT_APP_API_URL;

  try {
    const res = await axios.post(`${apiURL}auth/login`, userCredentials);
    dispatch({ type: "LOGIN_SUCCESS", payload: res.data });
  } catch (err) {
    dispatch({ type: "LOGIN_FAILURE", payload: err });
  }
};
