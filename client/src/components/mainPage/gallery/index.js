import React, { Component } from "react";
import PageHeader from "../../utils/PageHeader";
import ImageGallery from "./ImageGallery";
import VideoGallery from "./VideoGallery";

class Gallery extends Component {

  componentWillUnmount() {
    this.props.turnOffNav();
  }

  render() {
    return (
      <div>
        <PageHeader title="Gallery" />
        <ImageGallery />
        <VideoGallery />
      </div>
    );
  }
}

export default Gallery;
