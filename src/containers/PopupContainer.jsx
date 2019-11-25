import React from "react";
import PropTypes from "prop-types";
import { Popup } from "../components/Popup";
import { connect } from "react-redux";
import { popupClose } from "../store/actions/popupClose";

function PopupContainer(props) {
  return <Popup text={props.text} onClick={props.popupCloseAction} />;
}

const mapDispatchToProps = dispatch => ({
  popupCloseAction: () => dispatch(popupClose())
});

export default connect(null, mapDispatchToProps)(PopupContainer);

Popup.propTypes = {
  text: PropTypes.string,
  popupCloseAction: PropTypes.func
};
