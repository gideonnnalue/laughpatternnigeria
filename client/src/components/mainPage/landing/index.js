import React, { Component } from "react";
import Carousel from "./Carousel";
import Info from "./Info";
import About from "./About";
import Services from "./Services";
import Overview from "./Overiew";
import Ceo from "./Ceo";
import LatestVideos from "./LatestVideos";
import LatestEvents from "./LatestEvents";
import Booking from "./Booking";

class Landing extends Component {

  componentWillUnmount() {
    this.props.turnOffNav();
  }
  render() {
    return (
      <main>
        <Carousel />
        <Info />
        <About />
        <Services />
        <Overview />
        <Ceo />
        <LatestVideos />
        <LatestEvents />
        <Booking />
      </main>
    );
  }
}

export default Landing;
