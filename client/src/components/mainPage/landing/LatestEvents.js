import React, { Component } from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import LatestEventCard from "../../utils/LatestEventCard";

class LatestEvents extends Component {
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

    const { events } = this.state;

    const event = this.state.events.map((event, i) => (
      <LatestEventCard key={i} title={events[i].title} desc={events[i].desc} />
    ));
    return (
      <section className="section-latest-events">
        <div className="container">
          <h3 className="heading heading-primary my-5">Latest Events</h3>
          <div className="service-slider text-center">
            <Slider {...settings}>{event}</Slider>
            <Link to="/" className="btns btns--white btns--animated my-5">
              More Events
            </Link>
          </div>
        </div>
      </section>
    );
  }
}

export default LatestEvents;
