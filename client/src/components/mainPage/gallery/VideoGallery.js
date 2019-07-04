import React, { Component } from "react";
import FsLightbox from "fslightbox-react";
import Flip from "react-reveal/Flip";
import Fade from "react-reveal/Fade";
import img from "../../../assets/images/carousel11.jpg";
import img2 from "../../../assets/images/carousel2.jpg";

class VideoGallery extends Component {
  constructor(props) {
    super(props);
    this.state = {
      toggler: false,
      slide: 1,
      videos: [
        { vid: "https://www.youtube.com/watch?v=YgzrVs2eilU" },
        { vid: "https://www.youtube.com/watch?v=YgzrVs2eilU" },
        { vid: "https://www.youtube.com/watch?v=YgzrVs2eilU" }
      ]
    };

    this.openLightboxOnSlide = this.openLightboxOnSlide.bind(this);
  }

  openLightboxOnSlide(number) {
    this.setState({ toggler: !this.state.toggler, slide: number });
  }
  render() {
    const imageCard = this.state.videos.map((video, i) => (
      <div class="card gallery__video-card">
        <iframe
          width="420"
          height="315"
          src="https://www.youtube.com/embed/tgbNymZ7vqY"
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
      <section className="section-video-gallery">
        <div className="container">
          <div className="row">
            <div className="col">
              <h3 className="heading heading-primary mb-5">
                <Flip bottom cascade>
                  Video Gallery
                </Flip>
              </h3>
              <div className="card-column">{imageCard}</div>
              <FsLightbox
                toggler={this.state.toggler}
                slide={this.state.slide}
                sources={this.state.videos.map(video => video.vid)}
              />
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
