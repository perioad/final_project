import { SIGN_IN_FETCHING, SIGN_IN_SUCCESS, SIGN_IN_ERROR } from "../constants";
import axios from "axios";

export function signIn(
  api_url,
  api_url_appointments,
  emailInput,
  passwordInput
) {
  return dispatch => {
    dispatch({
      type: SIGN_IN_FETCHING,
      isFetching: true,
      isError: false
    });

    let allAppointments;

    const promise = new Promise(resolve => {
      axios
        .get(api_url_appointments)
        .then(responce => responce.data)
        .then(data => resolve((allAppointments = data)));
    });

    promise.then(
      axios
        .get(api_url)
        .then(response => response.data)
        .then(data => data.filter(({ email }) => email === emailInput))
        .then(data => {
          if (data.length === 0) {
            dispatch({
              type: SIGN_IN_ERROR,
              isFetching: false,
              isError: true
            });
          }
          const [user] = data;
          const userAppointments = allAppointments.filter(
            ({ userId }) => userId === user.id
          );
          user.password === passwordInput
            ? dispatch({
                type: SIGN_IN_SUCCESS,
                isFetching: false,
                isLoggedIn: true,
                id: user.id,
                name: user.name,
                surname: user.surname,
                phone: user.phone,
                email: user.email,
                password: user.password,
                appointments: userAppointments
              })
            : dispatch({
                type: SIGN_IN_ERROR,
                isFetching: false,
                isError: true
              });
        })
        .catch(error => {
          console.log(error);
          dispatch({
            type: SIGN_IN_ERROR,
            isFetching: false,
            isError: true
          });
        })
    );
  };
}
