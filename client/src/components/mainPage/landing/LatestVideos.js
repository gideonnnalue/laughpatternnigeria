import React, { Component } from "react";
import { Link } from "react-router-dom";
import img from "../../../assets/images/img.jpg";
import LatestVideoCard from "../../utils/LatestVideoCard";
import Flip from "react-reveal/Flip";
import Fade from "react-reveal/Fade";
import axios from "axios";

class LatestVideos extends Component {
    constructor(props) {
        super(props);
        this.state = {
            videos: [],
            shownVideo: []
        };

        // , "563x563", "568x568", "562x562"
        this.showAllVideos = this.showAllVideos.bind(this);
    }

    showAllVideos(e) {
        e.preventDefault();

        const apiKey = "AIzaSyAeeR0uIKiiPWz5m7DboudXhM3Hrmbk9Fc";
        const channelId = "UCokgaZOCyQoKOeeckEPpX4Q";
        const url = `https://www.googleapis.com/youtube/v3/search?key=${apiKey}&channelId=${channelId}&part=snippet,id&order=date&maxResults=20`;

        axios
            .get(url)
            .then(res => {
                // let videos = [];
                let myVideos = res.data.items
                    .map((item, i) => {
                        return {
                            video: item.id.videoId,
                            thmb: item.snippet.thumbnails.medium.url
                        };
                    })
                    .filter(item => item.video !== undefined);

                this.setState({
                    shownVideo: myVideos
                });
            })
            .catch(err => console.log("err: " + err));
    }

    componentDidMount() {
        const apiKey = "AIzaSyAeeR0uIKiiPWz5m7DboudXhM3Hrmbk9Fc";
        const channelId = "UCokgaZOCyQoKOeeckEPpX4Q";
        const url = `https://www.googleapis.com/youtube/v3/search?key=${apiKey}&channelId=${channelId}&part=snippet,id&order=date&maxResults=20`;

        axios
            .get(url)
            .then(res => {
                // let videos = [];
                let myVideos = res.data.items
                    .map((item, i) => {
                        return {
                            video: item.id.videoId,
                            thmb: item.snippet.thumbnails.medium.url
                        };
                    })
                    .filter(item => item.video !== undefined);
                let visibleVideo = myVideos.splice(0, 4);

                this.setState({
                    videos: myVideos,
                    shownVideo: visibleVideo
                });
            })
            .catch(err => console.log("err: " + err));
    }

    render() {
        const latest = this.state.shownVideo.map(video => (
            <LatestVideoCard
                img={`https://source.unsplash.com/random/${video.video}`}
                link={video.video}
                key={video.video}
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
                            <a
                                href="#"
                                onClick={e => this.showAllVideos(e)}
                                className="btns btns--blue btns--animated my-5"
                            >
                                More Videos
                            </a>
                        </div>
                    </Fade>
                </div>
            </section>
        );
    }
}

export default LatestVideos;
