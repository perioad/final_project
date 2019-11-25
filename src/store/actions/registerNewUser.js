import {
  REGISTER_NEW_USER_FETCHING,
  REGISTER_NEW_USER_SUCCESS,
  REGISTER_NEW_USER_ERROR
} from "../constants";
import axios from "axios";

export function signUp(
  api_url,
  name,
  surname,
  phone,
  email,
  password
) {
  return dispatch => {
    dispatch({
      type: REGISTER_NEW_USER_FETCHING,
      isFetching: true,
      isError: false,
      isSuccess: false
    });

    axios
      .post(api_url, {
        name: name,
        surname: surname,
        phone: phone,
        email: email,
        password: password
      })
      .then(
        dispatch({
          type: REGISTER_NEW_USER_SUCCESS,
          isFetching: false,
          isSuccess: true
        })
      )
      .catch(error => {
        console.log(error);
        dispatch({
          type: REGISTER_NEW_USER_ERROR,
          isError: true,
          isFetching: false
        });
      });
  };
}
