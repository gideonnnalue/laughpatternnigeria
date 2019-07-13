import React, { Component } from "react";
import Slider from "react-slick";

import CarouselHeader from "../../utils/CarouselHeader";

import slide_one from "../../../assets/images/party1.jpg";
import slide_two from "../../../assets/images/party2.jpg";
import slide_three from "../../../assets/images/party3.jpg";
import logo from "../../../assets/images/lpn-large.png";

function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{
                ...style,
                display: "block",
                position: "absolute",
                top: "50%",
                right: "10%"
            }}
            onClick={onClick}
        />
    );
}

function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{
                ...style,
                display: "block",
                position: "absolute",
                top: "50%",
                left: "10%"
            }}
            onClick={onClick}
        />
    );
}

class Carousel extends Component {
    constructor(props) {
        super(props);
        this.state = {
            items: [
                {
                    img: slide_one,
                    heading: "This is Laugh Pattern",
                    desc:
                        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, accusantium perspiciatis voluptates expedita provident temporibus dolor voluptas iste."
                },
                {
                    img: slide_two,
                    heading: "We Entertain",
                    desc:
                        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, accusantium perspiciatis voluptates expedita provident temporibus dolor voluptas iste."
                },
                {
                    img: slide_three,
                    heading: "We innovate",
                    desc:
                        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, accusantium perspiciatis voluptates expedita provident temporibus dolor voluptas iste."
                }
            ]
        };
    }
    render() {
        const settings = {
            dots: true,
            fade: true,
            infinite: true,
            autoplay: true,
            speed: 1000,
            autoplaySpeed: 5000,
            cssEase: "linear",
            slidesToShow: 1,
            nextArrow: <SampleNextArrow />,
            prevArrow: <SamplePrevArrow />,
            slidesToScroll: 1,
            customPaging: i => (
                <div
                    className="carousel__paging"
                    style={{
                        width: "10px",
                        height: "10px",
                        color: "#fff",
                        opacity: "0.5",
                        border: "2px solid #fff",
                        borderRadius: "100px",
                        marginTop: "-50px",
                        textAlign: "center",
                        position: "relative",
                        backfaceVisibility: "hidden"
                    }}
                >
                    {/* <div
            style={{
              width: "10px",
              height: "10px",
              borderRadius: "100px",
              backgroundColor: "#fff",
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              backfaceVisibility: "hidden"
            }}
          > */}
                    {/* &nbsp;
          </div> */}
                    {/* {i + 1} */}
                </div>
            )
        };

        const items = this.state.items.map((item, i) => (
            <CarouselHeader
                key={i}
                image={item.img}
                heading={item.heading}
                desc={item.desc}
            />
        ));
        return (
            <section className="carousel__wrapper">
                <Slider {...settings}>{items}</Slider>
            </section>
        );
    }
}

export default Carousel;
