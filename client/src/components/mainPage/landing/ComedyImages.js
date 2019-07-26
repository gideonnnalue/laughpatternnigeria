import React, { Component } from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import LatestEventCard from "../../utils/LatestEventCard";
import { connect } from "react-redux";
import { getAllEvents } from "../../../actions/eventActions";
import isEmpty from "../../../validation/is-empty";
import Spinner from "../../adminPage/utils/Spinner";

class ComedyImages extends Component {
    constructor(props) {
        super(props);
        this.state = {
            events: [
                {
                    title: "Laugh Pattern",
                    desc:
                        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas fugit autem officia ut debitis a."
                },
                {
                    title: "Pool Party",
                    desc:
                        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas fugit autem officia ut debitis a."
                },
                {
                    title: "Eat and join",
                    desc:
                        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas fugit autem officia ut debitis a."
                },
                {
                    title: "Dj Services",
                    desc:
                        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas fugit autem officia ut debitis a."
                },
                {
                    title: "Dj Services",
                    desc:
                        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas fugit autem officia ut debitis a."
                },
                {
                    title: "Dj Services",
                    desc:
                        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas fugit autem officia ut debitis a."
                },
                {
                    title: "Dj Services",
                    desc:
                        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas fugit autem officia ut debitis a."
                },
                {
                    title: "Dj Services",
                    desc:
                        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas fugit autem officia ut debitis a."
                },
                {
                    title: "Dj Services",
                    desc:
                        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas fugit autem officia ut debitis a."
                },
                {
                    title: "Dj Services",
                    desc:
                        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas fugit autem officia ut debitis a."
                },
                {
                    title: "Dj Services",
                    desc:
                        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas fugit autem officia ut debitis a."
                },
                {
                    title: "Dj Services",
                    desc:
                        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas fugit autem officia ut debitis a."
                }
            ]
        };
    }

    componentDidMount() {
        // this.props.getAllEvents();
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
                        slidesToShow: 2,
                        slidesToScroll: 2,
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

        const { images, loading } = this.props.images;

        let allImage = <Spinner />;

        if (!isEmpty(images) && !loading) {
            allImage = images.map((img, i) => (
                <div key={i} className="comedy-image">
                    <img src={`/api/images/${img._id}`} alt="" />
                </div>
            ));
        }
        return (
            <section className="section-latest-events">
                <div className="container">
                    <h3 className="heading heading-primary my-5">Comedy</h3>
                    <div className="service-slider text-center">
                        <Slider {...settings}>{allImage}</Slider>
                    </div>
                </div>
            </section>
        );
    }
}

const mapStateToProps = state => ({
    events: state.events,
    images: state.images
});

export default connect(
    mapStateToProps,
    { getAllEvents }
)(ComedyImages);
