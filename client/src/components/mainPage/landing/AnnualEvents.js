import React, { Component } from "react";
import Slider from "react-slick";
import AnnualEvent from "../../utils/AnnualEvent";
import Flip from "react-reveal/Flip";

class AnnualEvents extends Component {
    constructor(props) {
        super(props);
        this.state = {
            services: [
                {
                    icon: "fas fa-crown",
                    heading: "Miss Laugh Pattern Nigeria",
                    desc: "🇳🇬..21 Sept. every year"
                },
                {
                    icon: "fas fa-theater-masks",
                    heading: "Laugh Pattern Nigeria comedy event",
                    desc: "🇳🇬..01 oct"
                },
                {
                    icon: "fas fa-grin-squint-tears",
                    heading: "Laugh Pattern Nigeria street comedy tour",
                    desc: "Every Friday."
                },
                {
                    icon: "fas fa-smile-wink",
                    heading: "Warri Comedy Village..",
                    desc: "Every Month."
                }
            ]
        };
    }
    render() {
        const settings = {
            dots: true,
            fade: true,
            autoplay: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
            initialSlide: 0
        };

        const service = this.state.services.map((service, i) => (
            <AnnualEvent
                key={i}
                icon={service.icon}
                heading={service.heading}
                desc={service.desc}
            />
        ));
        return (
            <section className="section-annualevents">
                <div className="container">
                    <h3 className="heading heading-primary my-5">
                        <Flip bottom cascade>
                            Annual Events
                        </Flip>
                    </h3>
                    <div className="annualevents-slider">
                        <Slider {...settings}>{service}</Slider>
                    </div>
                </div>
            </section>
        );
    }
}

export default AnnualEvents;
