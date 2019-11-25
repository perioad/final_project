import {
  ADD_USER_APPOINTMENT_FETCHING,
  ADD_USER_APPOINTMENT_SUCCESS,
  ADD_USER_APPOINTMENT_ERROR
} from "../constants";
import axios from "axios";

export function addUserAppointment(
  api_url,
  userId,
  date,
  time,
  id,
  name,
  about,
  price,
  description,
  img
) {
  return dispatch => {
    dispatch({
      type: ADD_USER_APPOINTMENT_FETCHING,
      isFetching: true,
      isError: false,
      isSuccess: false
    });

    axios
      .post(`${api_url}`, {
        userId: userId,
        service: {
          id: id,
          name: name,
          about: about,
          price: price,
          description: description,
          img: img,
          date: date,
          time: time
        }
      })
      .then(() =>
        axios
          .get(api_url)
          .then(responce => responce.data)
          .then(data =>
            dispatch({
              type: ADD_USER_APPOINTMENT_SUCCESS,
              isFetching: false,
              isSuccess: true,
              appointments: data
            })
          )
      )
      .catch(error => {
        console.log(error);
        dispatch({
          type: ADD_USER_APPOINTMENT_ERROR,
          isFetching: false,
          isError: true
        });
      });
  };
}
