import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import Fade from "react-reveal/Fade";
import Flip from "react-reveal/Flip";

const CarouselHeader = props => {
    return (
        <div>
            <div
                className="carousel__images"
                style={{
                    background: `linear-gradient(to right,rgba(0,0,0,1),rgba(0,0,0,0.2)), url(${
                        props.image
                    })`
                }}
            >
                <div className="carousel__logo">
                    <div className="container carousel__inner">
                        <div className="row carousel__inner align-items-center">
                            <Fade bottom opposite cascade duration={1000}>
                                <div className="col text-white text-left carousel__content text-center">
                                    <h1 className="carousel__heading">
                                        {/* <Flip left cascade delay={1000}> */}
                                        {props.heading}
                                        {/* </Flip> */}
                                    </h1>
                                    <p className="carousel__paragraph mb-5">
                                        {props.desc}
                                    </p>
                                    <Link
                                        to="/about"
                                        className="btns btns--white btns--animated"
                                    >
                                        Learn More
                                    </Link>
                                </div>
                            </Fade>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

CarouselHeader.propTypes = {
    image: PropTypes.string.isRequired,
    heading: PropTypes.string.isRequired,
    desc: PropTypes.string.isRequired
};

export default CarouselHeader;
