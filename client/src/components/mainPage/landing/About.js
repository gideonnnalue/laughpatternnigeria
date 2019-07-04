import React, { Component } from "react";
import img1 from "../../../assets/images/carousel11.jpg";
import img2 from "../../../assets/images/carousel2.jpg";
import img3 from "../../../assets/images/img.jpg";
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
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Voluptatibus labore, mollitia aliquid deserunt sequi,
                  praesentium at repellat veritatis dolorem odit natus amet
                  incidunt officia vitae ea iure qui illum voluptates?Iure
                  commodi provident voluptate explicabo eius! Ducimus, sequi
                  nostrum eos cum nesciunt veritatis consequuntur aspernatur
                  quibusdam natus unde voluptatibus?
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
