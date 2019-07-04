import React, { Component } from "react";
import FsLightbox from "fslightbox-react";
import Flip from "react-reveal/Flip";
import Fade from "react-reveal/Fade";
import img from "../../../assets/images/carousel11.jpg";
import img2 from "../../../assets/images/carousel2.jpg";

class ImageGallery extends Component {
  constructor(props) {
    super(props);
    this.state = {
      toggler: false,
      slide: 1,
      images: [
        { img: "https://source.unsplash.com/random/566x566" },
        { img: "https://source.unsplash.com/random/565x565" },
        { img: "https://source.unsplash.com/random/564x564" },
        { img: "https://source.unsplash.com/random/563x563" },
        { img: "https://source.unsplash.com/random/567x567" },
        { img: "https://source.unsplash.com/random/568x568" },
        { img: "https://source.unsplash.com/random/561x561" },
        { img: "https://source.unsplash.com/random/562x562" },
        { img: "https://source.unsplash.com/random/569x569" }
      ]
    };

    this.openLightboxOnSlide = this.openLightboxOnSlide.bind(this);
  }

  openLightboxOnSlide(number) {
    this.setState({ toggler: !this.state.toggler, slide: number });
  }
  render() {
    const imageCard = this.state.images.map((image, i) => (
      <div class="card gallery__image-card">
        <img
          src={image.img}
          class="card-img-top"
          alt="..."
          onClick={() => this.openLightboxOnSlide(i)}
        />
        {/* <div className="gallery__image-overlay color-white">
          jjjjjjjjjjjjjjjjjjjjjj
        </div> */}
      </div>
    ));
    return (
      <section className="section-image-gallery">
        <div className="container">
          <div className="row">
            <div className="col">
              <h3 className="heading heading-primary mb-5">
                <Flip bottom cascade>
                  Image Gallery
                </Flip>
              </h3>
              <div className="card-column">{imageCard}</div>
              <FsLightbox
                toggler={this.state.toggler}
                slide={this.state.slide}
                sources={this.state.images.map(image => image.img)}
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

export default ImageGallery;
