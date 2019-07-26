import React, { Component } from "react";
import Fade from "react-reveal/Fade";

class Info extends Component {
    render() {
        return (
            <section className="section-info">
                <div className="container">
                    <Fade bottom opposite cascade duration={1000} delay={500}>
                        <div className="row">
                            <div className="col-lg-3 col-md-6 text-center">
                                <span className="info-icons">
                                    <i className="far fa-map" />
                                </span>
                                <h3>Address</h3>
                                <p>No. 72 Okpanam Road Asaba</p>
                            </div>
                            <div className="col-lg-3 col-md-6 text-center">
                                <span className="info-icons">
                                    <i className="far fa-clock" />
                                </span>
                                <h3>Opening Time</h3>
                                <p>
                                    Monday - Sunday <br />
                                    8am - 9pm
                                </p>
                            </div>
                            <div className="col-lg-3 col-md-6 text-center">
                                <span className="info-icons">
                                    <i className="fas fa-mobile-alt" />
                                </span>
                                <h3>Phone</h3>
                                <p>
                                    +2347067667224 <br />
                                    +2348122080465
                                </p>
                            </div>
                            <div className="col-lg-3 col-md-6 text-center">
                                <span className="info-icons">
                                    <i className="far fa-envelope" />
                                </span>
                                <h3>Email</h3>
                                <p>laughpatternnigeria@gmail.com</p>
                            </div>
                        </div>
                    </Fade>
                </div>
            </section>
        );
    }
}

export default Info;
