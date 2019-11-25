import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { signOut } from "../store/actions/signOutAction";
import Header from "../components/Header";

function HeaderContainer(props) {
  const {
    user: { isLoggedIn },
    signOutAction
  } = props;

  return (
    <>
      <Header isLoggedIn={isLoggedIn} signOut={signOutAction} />
    </>
  );
}

const mapStateToProps = store => ({
  user: store
});

const mapDispatchToProps = dispatch => ({
  signOutAction: () => dispatch(signOut())
});

export default connect(mapStateToProps, mapDispatchToProps)(HeaderContainer);

HeaderContainer.propTypes = {
  user: PropTypes.object,
  signOutAction: PropTypes.func
};
