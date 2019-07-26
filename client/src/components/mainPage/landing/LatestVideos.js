import React, { Component } from "react";
import { Link } from "react-router-dom";
import img from "../../../assets/images/img.jpg";
import LatestVideoCard from "../../utils/LatestVideoCard";
import Flip from "react-reveal/Flip";
import Fade from "react-reveal/Fade";

class LatestVideos extends Component {
    constructor(props) {
        super(props);
        this.state = {
            videos: ["JpzZXSdXSMo", "7_hirmll4ZE", "Sxzcp78t9Ig", "oQTBvRjvzoc"]
        };

        // , "563x563", "568x568", "562x562"
    }
    render() {
        const latest = this.state.videos.map(video => (
            <LatestVideoCard
                img={`https://source.unsplash.com/random/${video}`}
                link={video}
                key={video}
            />
        ));

        return (
            <section className="section-latest-videos">
                <div className="container">
                    <h3 className="heading heading-primary my-5">
                        <Flip bottom cascade>
                            Latest Videos
                        </Flip>
                    </h3>
                    <Fade left>
                        <div className="row justify-content-center">
                            <div className="latest-video d-flex flex-row justify-content-center flex-wrap">
                                {latest}
                            </div>
                            <Link
                                to="/"
                                className="btns btns--blue btns--animated my-5"
                            >
                                More Videos
                            </Link>
                        </div>
                    </Fade>
                </div>
            </section>
        );
    }
}

export default LatestVideos;
