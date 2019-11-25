import React from "react";
import PropTypes from "prop-types";
import { useHistory, useRouteMatch } from "react-router-dom";

export default function ServiceCard(props) {
  const history = useHistory();
  let { url } = useRouteMatch();

  const handleClick = () => history.push(`${url}/${props.service.id}`);
  
  return (
    <div onClick={handleClick} className="service">
      <img className="service__image image" src={props.service.img} alt={props.service.name} />
      <div className="service__content">
        <div className="service__description">{props.service.about}</div>
        <div className="service__name">
          {props.service.name}
          <div className="service__price">{props.service.price}</div>
        </div>
      </div>
    </div>
  );
}

ServiceCard.propTypes = {
  service: PropTypes.object
};