import React from "react";
import PropTypes from "prop-types";
import ServiceCard from "./ServiceCard";

export function AllServices(props) {
  const servicesCards = props.servicesData.map(service => (
    <ServiceCard
      key={service.id}
      service={service}
    />
  ));

  return (
    <section className="services">
      <div className="container">
        <div className="services__inner">{servicesCards}</div>
      </div>
    </section>
  );
}

AllServices.propTypes = {
  servicesData: PropTypes.array
};
