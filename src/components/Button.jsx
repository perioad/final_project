import React from "react";
import PropTypes from "prop-types";

export function Button(props) {
  return (
    <button onClick={props.onClick} className="btn" type="submit">
      {props.name}
    </button>
  );
}

Button.propTypes = {
  onClick: PropTypes.func,
  name: PropTypes.string
};
