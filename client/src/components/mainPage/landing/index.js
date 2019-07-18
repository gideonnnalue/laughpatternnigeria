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
import ComedyImages from "./ComedyImages";
import AnnualEvents from "./AnnualEvents";

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
                <ComedyImages />
                <Ceo />
                <LatestVideos />
                <AnnualEvents />
                <LatestEvents />
                <Booking />
            </main>
        );
    }
}

export default Landing;
