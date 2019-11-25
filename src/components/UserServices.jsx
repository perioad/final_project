import React from "react";
import PropTypes from "prop-types";
import ServiceCard from "./ServiceCard";

export function UserServices(props) {
  const personalAppointments =
    props.personalAppointments.length === 0 ? (
      <div>Вы пока что не записаны ни на какие услуги :с</div>
    ) : (
      props.personalAppointments.map(({ service }, index) => (
        <ServiceCard key={index} service={service} />
      ))
    );

  return (
    <section>
      <div className="container">
        <div className="account-center">{personalAppointments}</div>
      </div>
    </section>
  );
}

UserServices.propTypes = {
  personalAppointments: PropTypes.array
};
