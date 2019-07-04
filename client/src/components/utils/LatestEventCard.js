import React, { Component } from "react";
import { Link } from "react-router-dom";
import img from '../../assets/images/img.jpg';

class LatestEventCard extends Component {
  render() {
    return (
      <div className="card latest-event-card text-left" style={{width: "28rem"}}>
        <img src={img} className="card-img-top" alt="..." />
        <div className="card-body latest-event-card-body">
          <h5 className="card-title latest-event-card-title">Card title</h5>
          <p className="card-text latest-event-card-desc">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <Link to="/" className="btns-text">
            Read more
          </Link>
        </div>
      </div>
    );
  }
}

export default LatestEventCard;
