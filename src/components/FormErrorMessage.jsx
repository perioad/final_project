import React from "react";
import PropTypes from "prop-types";

export default function FormErrorMessage(props) {
  return <div className="sign-up__error">{props.children}</div>;
}

FormErrorMessage.propTypes = {
  children: PropTypes.string
};
