import React, { Component } from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import LatestEventCard from "../../utils/LatestEventCard";
import { connect } from "react-redux";
import { getAllEvents } from "../../../actions/eventActions";
import isEmpty from "../../../validation/is-empty";
import Spinner from "../../adminPage/utils/Spinner";

class LatestEvents extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    componentDidMount() {}

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

        const { events, loading } = this.props.events;

        let event = (
            <div>
                <Spinner />
            </div>
        );

        // const { events } = this.state;

        if (!isEmpty(events) && !loading) {
            event = events.map((event, i) => (
                <LatestEventCard
                    key={i}
                    title={event.title}
                    desc={event.details}
                    img={`/api/events/event/${event._id}/image`}
                />
            ));
        }
        return (
            <section className="section-latest-events">
                <div className="container">
                    <h3 className="heading heading-primary my-5">
                        Latest Events
                    </h3>
                    <div className="service-slider text-center">
                        <Slider {...settings}>{event}</Slider>
                        <Link
                            to="/"
                            className="btns btns--white btns--animated my-5"
                        >
                            More Events
                        </Link>
                    </div>
                </div>
            </section>
        );
    }
}

const mapStateToProps = state => ({
    events: state.events
});

export default connect(
    mapStateToProps,
    { getAllEvents }
)(LatestEvents);
