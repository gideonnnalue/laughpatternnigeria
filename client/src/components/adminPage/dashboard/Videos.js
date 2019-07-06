import React, { Component } from "react";
import { Link } from "react-router-dom";
import img from "../../../assets/images/carousel11.jpg";
import PropTypes from 'prop-types';

class Videos extends Component {
    componentDidMount() {
        this.props.setHeading("Videos");
    }

    render() {
        return (
            <div class="col-lg-8 mb-5">
                {/* <!-- Demo Content--> */}
                <div class="p-3 bg-white d-flex align-items-center shadow-sm rounded mb-5 dashboard__body">
                    <div class="dashboard__top d-flex ">
                        <div className="dashboard__overview d-flex flex-row align-items-center justify-content-around">
                            <Link
                                to="/"
                                className="btns btns--blue btns--custom-small btns--animated text-white ml-4"
                            >
                                Add Videos
                            </Link>
                        </div>
                    </div>
                </div>

                <div className="d-flex flex-row justify-content-between">
                    <div class="p-2 bg-white d-inline-block shadow-sm rounded mb-5 dashboard__body">
                        <div class="dashboard__top d-flex ">
                            <div className="dashboard__overview d-inline">
                                <div class="card gallery__video-card">
                                    <iframe
                                        width="320"
                                        height="215"
                                        src="https://www.youtube.com/embed/tgbNymZ7vqY"
                                    />
                                </div>
                                <div className="dashboard__overview--button text-center mt-4">
                                    <Link
                                        to="/"
                                        className="btns-text btns-text--red px-3"
                                    >
                                        Delete
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="p-2 bg-white d-inline-block shadow-sm rounded mb-5 dashboard__body">
                        <div class="dashboard__top d-flex ">
                            <div className="dashboard__overview d-inline">
                                <div class="card gallery__video-card">
                                    <iframe
                                        width="320"
                                        height="215"
                                        src="https://www.youtube.com/embed/tgbNymZ7vqY"
                                    />
                                </div>
                                <div className="dashboard__overview--button text-center mt-4">
                                    <Link
                                        to="/"
                                        className="btns-text btns-text--red px-3"
                                    >
                                        Delete
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

Videos.propTypes = {
    setHeading: PropTypes.func.isRequired
}

export default Videos;
