import {
  ADD_GUEST_APPOINTMENT_FETCHING,
  ADD_GUEST_APPOINTMENT_SUCCESS,
  ADD_GUEST_APPOINTMENT_ERROR
} from "../constants";
import axios from "axios";

export function addGuestAppointment(
  api_url,
  name,
  surname,
  phone,
  date,
  time,
  service
) {
  return dispatch => {
    dispatch({
      type: ADD_GUEST_APPOINTMENT_FETCHING,
      isFetching: true,
      isError: false,
      isSuccess: false
    });

    axios
      .post(api_url, {
        name: name,
        surname: surname,
        phone: phone,
        date: date,
        time: time,
        service: service
      })
      .then(
        dispatch({
          type: ADD_GUEST_APPOINTMENT_SUCCESS,
          isFetching: false,
          isSuccess: true
        })
      )
      .catch(error => {
        console.log(error);
        dispatch({
          type: ADD_GUEST_APPOINTMENT_ERROR,
          isError: true,
          isFetching: false
        });
      });
  };
}
