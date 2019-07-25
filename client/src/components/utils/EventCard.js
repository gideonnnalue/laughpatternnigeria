import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const EventCard = props => {
    return (
        <div className="card events-event__card m-2">
            <img src={props.img} className="card-img-top" alt="..." />
            <div className="card-body events-event__body">
                <Link to="#">
                    <h5 className="card-title events-event__title">
                        {props.title}
                    </h5>
                </Link>
                <p className="card-text events-event__desc">{props.desc}</p>
                <Link to="#" className="btns-text">
                    Read more
                </Link>
            </div>
            <div className="events-event__type tag text-white py-2 px-4">
                Comedy
            </div>
        </div>
    );
};

EventCard.propTypes = {
    img: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    desc: PropTypes.string.isRequired
};

export default EventCard;
