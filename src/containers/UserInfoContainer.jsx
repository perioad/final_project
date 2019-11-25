import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { UserInfo } from "../components/UserInfo";
import { changeUserData } from "../store/actions/changeUserData";
import { LoadingSpinner } from "../components/LoadingSpinner";
import Popup from "../components/Popup";

function UserInfoContainer(props) {
  const { user, changeUserDataAction } = props;
  const { isFetching, isError, isSuccess } = props.user;

  const phoneRegex = /^(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){11,14}(\s*)?$/;
  const api_url = `http://localhost:8000/users`;

  return (
    <>
      {isFetching ? (
        <LoadingSpinner />
      ) : isError ? (
        <Popup text="Что-то пошло не так :с" />
      ) : isSuccess ? (
        <Popup text="Все прошло успешно :)" />
      ) : (
        <UserInfo
          changeUserData={changeUserDataAction}
          user={user}
          phoneRegex={phoneRegex}
          api_url={api_url}
        />
      )}
    </>
  );
}

const mapStateToProps = state => ({
  user: state
});

const mapDispatchToProps = dispatch => ({
  changeUserDataAction: (id, name, surname, phone, email, password) =>
    dispatch(changeUserData(id, name, surname, phone, email, password))
});

export default connect(mapStateToProps, mapDispatchToProps)(UserInfoContainer);

UserInfoContainer.propTypes = {
  user: PropTypes.object,
  changeUserDataAction: PropTypes.func
};
