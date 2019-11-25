import {
  CHANGE_USER_DATA_FETCHING,
  CHANGE_USER_DATA_SUCCESS,
  CHANGE_USER_DATA_ERROR
} from "../constants";
import axios from "axios";

export function changeUserData(
  api_url,
  id,
  name,
  surname,
  phone,
  email,
  password
) {
  return dispatch => {
    dispatch({
      type: CHANGE_USER_DATA_FETCHING,
      isFetching: true,
      isError: false,
      isSuccess: true
    });

    axios
      .patch(`${api_url}/${id}`, {
        name: name,
        surname: surname,
        phone: phone,
        email: email,
        password: password
      })
      .then(
        dispatch({
          type: CHANGE_USER_DATA_SUCCESS,
          isFetching: false,
          isSuccess: true,
          name: name,
          surname: surname,
          phone: phone,
          email: email,
          password: password
        })
      )
      .catch(error => {
        console.log(error);
        dispatch({
          type: CHANGE_USER_DATA_ERROR,
          isError: true,
          isFetching: false
        });
      });
  };
}
