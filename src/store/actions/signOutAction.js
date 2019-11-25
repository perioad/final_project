import { SIGN_OUT_FETCHING, SIGN_OUT_SUCCESS } from "../constants";

export function signOut() {
  return dispatch => {
    dispatch({
      type: SIGN_OUT_FETCHING,
      isFetching: true,
      isError: false,
      isSuccess: false
    });
    const promise = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve();
      }, 1000);
    });
    promise.then(() =>
      dispatch({
        type: SIGN_OUT_SUCCESS,
        isFetching: false,
        isLoggedIn: false,
        isSuccess: true
      })
    );
  };
}
