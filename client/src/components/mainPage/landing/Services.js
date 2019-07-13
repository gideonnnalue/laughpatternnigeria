import React, { Component } from "react";
import Slider from "react-slick";
import Service from "../../utils/Service";
import Flip from "react-reveal/Flip";

class Services extends Component {
    constructor(props) {
        super(props);
        this.state = {
            services: [
                {
                    icon: "far fa-calendar-check",
                    heading: "Event Managment",
                    desc:
                        "We provide you with moments to remember with out quality event management services"
                },
                {
                    icon: "fas fa-plane-departure",
                    heading: "Flight Booking",
                    desc:
                        "we provide seamless and optimal flight booking services, every hour around the clock"
                },
                {
                    icon: "fas fa-shield-alt",
                    heading: "Event Security and Bouncer",
                    desc:
                        "We provide professional and reliable Security for any type of events."
                },
                {
                    icon: "fas fa-map-marked-alt",
                    heading: "Event Place",
                    desc:
                        "We provide suitable, classy and modern event location for any type of events."
                },
                {
                    icon: "fas fa-microphone-alt",
                    heading: "Master Of Ceremony(MC)",
                    desc:
                        "We give you top notch, exciting, funny and entertaining MC for any event."
                },
                {
                    icon: "fas fa-compact-disc",
                    heading: "Dj Services",
                    desc:
                        "We give you moments to remember with our absolutely professional and entertaining DJ services."
                },
                {
                    icon: "fas fa-palette",
                    heading: "Decorator",
                    desc:
                        "We make you event world class with our professional decorator."
                }
            ]
        };
    }
    render() {
        const settings = {
            dots: true,
            autoplay: true,
            infinite: true,
            speed: 500,
            slidesToShow: 3,
            slidesToScroll: 3,
            initialSlide: 0,
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 3,
                        infinite: true,
                        dots: true
                    }
                },
                {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 2,
                        initialSlide: 2
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }
            ]
        };

        const service = this.state.services.map((service, i) => (
            <Service
                key={i}
                icon={service.icon}
                heading={service.heading}
                desc={service.desc}
            />
        ));
        return (
            <section className="section-services">
                <div className="container">
                    <h3 className="heading heading-primary my-5">
                        <Flip bottom cascade>
                            Services
                        </Flip>
                    </h3>
                    <div className="service-slider">
                        <Slider {...settings}>{service}</Slider>
                    </div>
                </div>
            </section>
        );
    }
}

export default Services;
