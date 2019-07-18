import React from "react";
import PropTypes from "prop-types";
import Fade from "react-reveal/Fade";

const AnnualEvent = props => {
    return (
        <div>
            <Fade bottom opposite cascade duration={1000}>
                <div className="annualevents-info">
                    <div className="annualevents-icon annualevents-info-item pr-5">
                        <i className={props.icon} />
                    </div>
                    <div className="annualevents-desc annualevents-info-item">
                        <h4>{props.heading}</h4>
                        <p>{props.desc}</p>
                    </div>
                </div>
            </Fade>
        </div>
    );
};

AnnualEvent.propTypes = {
    icon: PropTypes.string.isRequired,
    heading: PropTypes.string.isRequired,
    desc: PropTypes.string.isRequired
};

export default AnnualEvent;
