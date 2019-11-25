import React from "react";
import PropTypes from "prop-types";
import { Button } from "./Button";

export function Popup(props) {
  return (
    <div className="popup-wrapper flex-col-center">
      <h2>{props.text}</h2>
      <Button onClick={props.onClick} name="Ок" />
    </div>
  );
}

Popup.propTypes = {
  text: PropTypes.string,
  onClick: PropTypes.func
};
