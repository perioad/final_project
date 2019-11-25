import React from "react";
import PropTypes from "prop-types";
import AppointmentFormsContainer from "../containers/AppointmentFormsContainer";

export function PreviewService(props) {
  return (
    <section className="preview">
      <div className="container">
        <div className="preview__inner">
          <div className="preview__content">
            <h3 className="preview__name">{props.service.name}</h3>
            <div className="preview__description">
              <p>{props.service.description}</p>
            </div>
          </div>
          <div className="preview__photo">
            <img
              src={props.service.img}
              className="image"
              alt={props.service.name}
            />
          </div>
          <AppointmentFormsContainer service={props.service} />
        </div>
      </div>
    </section>
  );
}

PreviewService.propTypes = {
  service: PropTypes.object
};
