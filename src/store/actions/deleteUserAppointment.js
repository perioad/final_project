import {
  DELETE_USER_APPOINTMENT_FETCHING,
  DELETE_USER_APPOINTMENT_SUCCESS,
  DELETE_USER_APPOINTMENT_ERROR
} from "../constants";
import axios from "axios";

export function deleteUserAppointment(api_url, id) {
  return dispatch => {
    dispatch({
      type: DELETE_USER_APPOINTMENT_FETCHING,
      isFetching: true,
      isError: false,
      isSuccess: false
    });

    axios
      .delete(`${api_url}/${id}`)
      .then(
        dispatch({
          type: DELETE_USER_APPOINTMENT_SUCCESS,
          isFetching: false,
          isSuccess: true,
          appointmentId: id
        })
      )
      .catch(error => {
        console.error(error);
        dispatch({
          type: DELETE_USER_APPOINTMENT_ERROR,
          isFetching: false,
          isError: true
        });
      });
  };
}
