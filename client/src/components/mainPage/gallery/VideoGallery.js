import React, { Component } from "react";
import FsLightbox from "fslightbox-react";
import Flip from "react-reveal/Flip";
import Fade from "react-reveal/Fade";
import img from "../../../assets/images/carousel11.jpg";
import img2 from "../../../assets/images/carousel2.jpg";

import axios from "axios";

class VideoGallery extends Component {
    constructor(props) {
        super(props);
        this.state = {
            toggler: false,
            slide: 1,
            videos: []
        };

        this.openLightboxOnSlide = this.openLightboxOnSlide.bind(this);
    }

    openLightboxOnSlide(number) {
        this.setState({ toggler: !this.state.toggler, slide: number });
    }

    componentDidMount() {
        const apiKey = "AIzaSyAeeR0uIKiiPWz5m7DboudXhM3Hrmbk9Fc";
        const channelId = "UCokgaZOCyQoKOeeckEPpX4Q";
        const url = `https://www.googleapis.com/youtube/v3/search?key=${apiKey}&channelId=${channelId}&part=snippet,id&order=date&maxResults=20`;

        axios
            .get(url)
            .then(res => {
                // let videos = [];
                let videos = res.data.items
                    .map((item, i) => {
                        return {
                            video: item.id.videoId,
                            thmb: item.snippet.thumbnails.medium.url
                        };
                    })
                    .filter(item => item.video !== undefined);

                this.setState({ videos });
            })
            .catch(err => console.log("err: " + err));
    }

    render() {
        const imageCard = this.state.videos.map((video, i) => (
            <div className="card gallery__video-card mr-2" key={i}>
                <iframe
                    width="420"
                    height="315"
                    src={`https://www.youtube.com/embed/${video.video}`}
                    style={{
                        border: "1px solid #989898"
                    }}
                />
                {/* <img
          src={image.img}
          class="card-img-top"
          alt="..."
          onClick={() => this.openLightboxOnSlide(i)}
        /> */}
                {/* <div className="gallery__video-overlay color-white">
          jjjjjjjjjjjjjjjjjjjjjj
        </div> */}
            </div>
        ));
        return (
            <section className="section-video-gallery" id="videoGallery">
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <h3 className="heading heading-primary mb-5">
                                <Flip bottom cascade>
                                    Video Gallery
                                </Flip>
                            </h3>
                            <div className="card-column">{imageCard}</div>
                            {/* <FsLightbox
                                toggler={this.state.toggler}
                                slide={this.state.slide}
                                sources={this.state.videos.map(
                                    video => video.vid
                                )}
                            /> */}
                            {/* <a onClick={() => this.openLightboxOnSlide(1)}>
                <img src={img} />
              </a>
              <a onClick={() => this.openLightboxOnSlide(2)}>
                <img src={img2} />
              </a>
              <a onClick={() => this.openLightboxOnSlide(3)}>
                <img src={img} />
              </a>
              <FsLightbox
                toggler={this.state.toggler}
                slide={this.state.slide}
                sources={[
                  img,
                  img2,
                  "https://www.youtube.com/watch?v=xshEZzpS4CQ"
                ]}
              /> */}
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default VideoGallery;
