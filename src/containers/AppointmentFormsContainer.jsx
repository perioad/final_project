import React from "react";
import PropTypes from "prop-types";

import { connect } from "react-redux";
import { UserAppointmentForm } from "../components/UserAppointmentForm";
import { GuestAppointmentForm } from "../components/GuestAppointmentForm";
import { addGuestAppointment } from "../store/actions/addGuestAppointmentAction";
import { addUserAppointment } from "../store/actions/addUserAppointmentAction";
import { deleteUserAppointment } from "../store/actions/deleteUserAppointment";

function AppointmentFormsContainer(props) {
  const api_url_guests = `http://localhost:8000/guests`;
  const api_url_appointments = `http://localhost:8000/appointments`;
  const phoneRegex = /^(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){11,14}(\s*)?$/;

  const { appointments } = props.user;
  const [thisServiceAppointmented] = appointments.filter(
    ({ service }) => service.id === props.service.id
  );

  const {
    user,
    user: { isLoggedIn },
    addGuestAppointmentAction,
    addUserAppointmentAction,
    deleteUserAppointmentAction
  } = props;
  return (
    <>
      {isLoggedIn ? (
        <UserAppointmentForm
          user={user}
          service={props.service}
          api_url={api_url_appointments}
          addUserAppointment={addUserAppointmentAction}
          deleteUserAppointment={deleteUserAppointmentAction}
          thisServiceAppointmented={thisServiceAppointmented}
        />
      ) : (
        <GuestAppointmentForm
          serviceName={props.service.name}
          phoneRegex={phoneRegex}
          api_url={api_url_guests}
          addGuestAppointment={addGuestAppointmentAction}
        />
      )}
    </>
  );
}

const mapStateToProps = store => ({
  user: store
});

const mapDispatchToProps = dispatch => ({
  addGuestAppointmentAction: (
    api_url,
    name,
    surname,
    phone,
    date,
    time,
    serviceName
  ) =>
    dispatch(
      addGuestAppointment(
        api_url,
        name,
        surname,
        phone,
        date,
        time,
        serviceName
      )
    ),
  addUserAppointmentAction: (
    api_url,
    userId,
    date,
    time,
    serviceId,
    name,
    about,
    price,
    description,
    img
  ) =>
    dispatch(
      addUserAppointment(
        api_url,
        userId,
        date,
        time,
        serviceId,
        name,
        about,
        price,
        description,
        img
      )
    ),
  deleteUserAppointmentAction: (api_url, appointmentId) =>
    dispatch(deleteUserAppointment(api_url, appointmentId))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AppointmentFormsContainer);

AppointmentFormsContainer.propTypes = {
  service: PropTypes.object,
  user: PropTypes.object,
  deleteUserAppointment: PropTypes.func,
  addUserAppointment: PropTypes.func,
  adGuestAppointment: PropTypes.func
};
