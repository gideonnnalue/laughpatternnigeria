import React from "react";
import PropTypes from "prop-types";
import Fade from "react-reveal/Fade";

const Service = props => {
  return (
    <div>
      <Fade bottom opposite cascade duration={1000}>
        <div className="service-info">
          <div className="service-icon service-info-item pr-5">
            <i className={props.icon} />
          </div>
          <div className="service-desc service-info-item">
            <h4>{props.heading}</h4>
            <p>{props.desc}</p>
          </div>
        </div>
      </Fade>
    </div>
  );
};

Service.propTypes = {
  icon: PropTypes.string.isRequired,
  heading: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired
};

export default Service;
