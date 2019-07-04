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
          icon: "fas fa-mobile-alt",
          heading: "Dj Services",
          desc:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas fugit autem officia ut debitis a."
        },
        {
          icon: "fas fa-mobile-alt",
          heading: "Dj Services",
          desc:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas fugit autem officia ut debitis a."
        },
        {
          icon: "fas fa-mobile-alt",
          heading: "Dj Services",
          desc:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas fugit autem officia ut debitis a."
        },
        {
          icon: "fas fa-mobile-alt",
          heading: "Dj Services",
          desc:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas fugit autem officia ut debitis a."
        },
        {
          icon: "fas fa-mobile-alt",
          heading: "Dj Services",
          desc:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas fugit autem officia ut debitis a."
        },
        {
          icon: "fas fa-mobile-alt",
          heading: "Dj Services",
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
