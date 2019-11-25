import {
  SIGN_IN_FETCHING,
  SIGN_IN_SUCCESS,
  SIGN_IN_ERROR,
  SIGN_OUT_FETCHING,
  SIGN_OUT_SUCCESS,
  REGISTER_NEW_USER_FETCHING,
  REGISTER_NEW_USER_SUCCESS,
  REGISTER_NEW_USER_ERROR,
  CHANGE_USER_DATA_FETCHING,
  CHANGE_USER_DATA_SUCCESS,
  CHANGE_USER_DATA_ERROR,
  ADD_GUEST_APPOINTMENT_FETCHING,
  ADD_GUEST_APPOINTMENT_SUCCESS,
  ADD_GUEST_APPOINTMENT_ERROR,
  DELETE_USER_APPOINTMENT_FETCHING,
  DELETE_USER_APPOINTMENT_SUCCESS,
  DELETE_USER_APPOINTMENT_ERROR,
  ADD_USER_APPOINTMENT_FETCHING,
  ADD_USER_APPOINTMENT_SUCCESS,
  ADD_USER_APPOINTMENT_ERROR,
  POPUP_CLOSE
} from "../constants";

const initialState = {
  id: 1,
  name: "",
  surname: "",
  phone: "",
  email: "",
  password: "",
  appointments: [],
  isLoggedIn: false,
  isFetching: false,
  isError: false,
  isSuccess: false
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case POPUP_CLOSE:
      return {
        ...state,
        isSuccess: action.isSuccess,
        isError: action.isError
      };

    case DELETE_USER_APPOINTMENT_FETCHING:
      return {
        ...state,
        isFetching: action.isFetching,
        isError: action.isError,
        isSuccess: action.isSuccess
      };
    case DELETE_USER_APPOINTMENT_SUCCESS:
      const newAppointmentsState = state.appointments.filter(
        ({ id }) => id !== action.appointmentId
      );
      return {
        ...state,
        isFetching: action.isFetching,
        isSuccess: action.isSuccess,
        appointments: newAppointmentsState
      };
    case DELETE_USER_APPOINTMENT_ERROR:
      return {
        ...state,
        isFetching: action.isFetching,
        isError: action.isError
      };

    case ADD_GUEST_APPOINTMENT_FETCHING:
      return {
        ...state,
        isFetching: action.isFetching,
        isError: action.isError,
        isSuccess: action.isSuccess
      };
    case ADD_GUEST_APPOINTMENT_SUCCESS:
      return {
        ...state,
        isFetching: action.isFetching,
        isSuccess: action.isSuccess
      };
    case ADD_GUEST_APPOINTMENT_ERROR:
      return {
        ...state,
        isFetching: action.isFetching,
        isError: action.isError
      };

    case ADD_USER_APPOINTMENT_FETCHING:
      return {
        ...state,
        isFetching: action.isFetching,
        isError: action.isError,
        isSuccess: action.isSuccess
      };
    case ADD_USER_APPOINTMENT_SUCCESS:
      return {
        ...state,
        isFetching: action.isFetching,
        isSuccess: action.isSuccess,
        appointments: action.appointments
      };
    case ADD_USER_APPOINTMENT_ERROR:
      return {
        ...state,
        isFetching: action.isFetching,
        isError: action.isError
      };

    case SIGN_IN_FETCHING:
      return {
        ...state,
        isFetching: action.isFetching,
        isError: action.isError
      };
    case SIGN_IN_SUCCESS:
      return {
        ...state,
        isFetching: action.isFetching,
        isLoggedIn: action.isLoggedIn,
        id: action.id,
        name: action.name,
        surname: action.surname,
        phone: action.phone,
        email: action.email,
        password: action.password,
        appointments: action.appointments
      };
    case SIGN_IN_ERROR:
      return {
        ...state,
        isFetching: action.isFetching,
        isError: action.isError
      };

    case SIGN_OUT_FETCHING:
      return {
        ...state,
        isFetching: action.isFetching,
        isError: action.isError
      };
    case SIGN_OUT_SUCCESS:
      return {
        ...state,
        isFetching: action.isFetching,
        isLoggedIn: action.isLoggedIn,
        id: "",
        name: "",
        surname: "",
        phone: "",
        email: "",
        password: ""
      };

    case CHANGE_USER_DATA_FETCHING:
      return {
        ...state,
        isFetching: action.isFetching,
        isError: action.isError,
        isSuccess: action.isSuccess
      };
    case CHANGE_USER_DATA_SUCCESS:
      return {
        ...state,
        name: action.name,
        surname: action.surname,
        phone: action.phone,
        email: action.email,
        password: action.password,
        isFetching: action.isFetching,
        isSuccess: action.isSuccess
      };
    case CHANGE_USER_DATA_ERROR:
      return {
        ...state,
        isError: action.isError,
        isFetching: action.isFetching
      };

    case REGISTER_NEW_USER_FETCHING:
      return {
        ...state,
        isFetching: action.isFetching,
        isError: action.isError,
        isSuccess: action.isSuccess
      };
    case REGISTER_NEW_USER_SUCCESS:
      return {
        ...state,
        isFetching: action.isFetching,
        isSuccess: action.isSuccess
      };
    case REGISTER_NEW_USER_ERROR:
      return {
        ...state,
        isError: action.isError,
        isFetching: action.isFetching
      };
    default:
      return state;
  }
}
