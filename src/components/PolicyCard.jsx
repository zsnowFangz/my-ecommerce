import React from "react";
import PropTypes from "prop-types";

const PolicyCard = (props) => {
  return (
    <div className="policy-card">
      <div className="policy-card__icon">
        <i className={props.icon}></i>
      </div>
      <div className="policy-card__info">
        <div className="policy-card__info__name">
          <span>{props.name}</span>
        </div>
        <div className="policy-card__info__description">
          <span>{props.description}</span>
        </div>
      </div>
    </div>
  );
};

PolicyCard.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
};

export default PolicyCard;
