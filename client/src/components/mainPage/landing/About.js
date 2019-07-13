import React, { Component } from "react";
import img1 from "../../../assets/images/ceo3.jpg";
import img2 from "../../../assets/images/ceo4.jpg";
import img3 from "../../../assets/images/ceo5.jpg";
import Flip from "react-reveal/Flip";
import Fade from "react-reveal/Fade";

class About extends Component {
    render() {
        return (
            <section className="section-about">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <h3 className="heading heading-primary mt-5">
                                <Flip bottom cascade>
                                    What We Offer
                                </Flip>
                            </h3>
                            <Fade bottom>
                                <p className="mb-5">
                                    Event Managment, Flight Booking, Event
                                    Security and Bouncer , Event Place, Master
                                    Of Ceremony(MC), Dj Services(DJ), Decourator
                                </p>
                            </Fade>
                        </div>
                        <div className="col-md-6 p-5 about-images">
                            <div className="about-image image-1">
                                <Fade cascade>
                                    <img src={img1} alt="" />
                                </Fade>
                            </div>
                            <div className="about-image image-2">
                                <Fade cascade delay={500}>
                                    <img src={img2} alt="" />
                                </Fade>
                            </div>
                            <div className="about-image image-3">
                                <Fade cascade delay={1000}>
                                    <img src={img3} alt="" />
                                </Fade>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default About;
