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

import axios from "axios";

class Landing extends Component {
    // componentDidMount() {
    //     const apiKey = "AIzaSyAeeR0uIKiiPWz5m7DboudXhM3Hrmbk9Fc";
    //     const channelId = "UCokgaZOCyQoKOeeckEPpX4Q";
    //     const url = `https://www.googleapis.com/youtube/v3/search?channelId={${channelId}}&key={${apiKey}}`;
    //     const url2 = `https://www.googleapis.com/youtube/v3/search`;

    //     axios
    //         .get(url, { part: "snippet" })
    //         .then(data => console.log(data))
    //         .catch(err => console.log("err: " + err));
    // }
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
