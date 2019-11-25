import React from "react";
import PropTypes from "prop-types";
import { Button } from "./Button";
import { connect } from "react-redux";
import { popupClose } from "../store/actions/popupClose";

function Popup(props) {
  return (
    <div className="popup-wrapper flex-col-center">
      <h2>{props.text}</h2>

      <Button onClick={props.popupCloseAction} name="Ок" />
    </div>
  );
}

const mapDispatchToProps = dispatch => ({
  popupCloseAction: () => dispatch(popupClose())
});

export default connect(null, mapDispatchToProps)(Popup);

Popup.propTypes = {
  text: PropTypes.string,
  popupCloseAction: PropTypes.func
};
