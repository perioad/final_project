import React from "react";
import PropTypes from "prop-types";

export function ShowError(props) {
  return (
    <footer className="show-error">
      <div className="container">
        <div className="show-error__inner">
          <p className="show-error__message">{props.errorMessage}</p>
          <img className="image" src={props.gif} alt="Error" />
        </div>
      </div>
    </footer>
  );
}

ShowError.propTypes = {
  errorMessage: PropTypes.string,
  gif: PropTypes.string
};
