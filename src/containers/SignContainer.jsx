import React from "react";
import PropTypes from "prop-types";
import { Sign } from "../components/Sign";
import { connect } from "react-redux";
import { signIn } from "../store/actions/signInAction";
import { signUp } from "../store/actions/registerNewUser";
import { LoadingSpinner } from "../components/LoadingSpinner";
import { Redirect } from "react-router-dom";
import Popup from "../components/Popup";

function SignContainer(props) {
  const { user, signInAction, signUpAction } = props;
  const { isFetching, isLoggedIn, isError, isSuccess } = props.user;
  const api_url_users = "http://localhost:8000/users";
  const api_url_appointments = "http://localhost:8000/appointments";
  const phoneRegex = /^(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){11,14}(\s*)?$/;

  return (
    <>
      {isFetching ? (
        <LoadingSpinner />
      ) : isLoggedIn ? (
        <Redirect to="/services" />
      ) : isError ? (
        <Popup text="Что то пошло не так :с" />
      ) : isSuccess ? (
        <Popup text="Успешно :)" />
      ) : (
        <Sign
          api_url_users={api_url_users}
          api_url_appointments={api_url_appointments}
          user={user}
          signInAction={signInAction}
          signUpAction={signUpAction}
          phoneRegex={phoneRegex}
        />
      )}
    </>
  );
}

const mapStateToProps = store => ({
  user: store
});

const mapDispatchToProps = dispatch => ({
  signInAction: (api_url_users, api_url_appointments, email, password) =>
    dispatch(signIn(api_url_users, api_url_appointments, email, password)),
  signUpAction: (api_url, name, surname, phone, email, password) =>
    dispatch(signUp(api_url, name, surname, phone, email, password))
});

export default connect(mapStateToProps, mapDispatchToProps)(SignContainer);

SignContainer.propTypes = {
  user: PropTypes.object,
  signInAction: PropTypes.func,
  signUpAction: PropTypes.func
};
