import React, { Component } from "react";
import { Link } from "react-router-dom";
import img from "../../assets/images/img.jpg";

class LatestEventCard extends Component {
    render() {
        return (
            <div
                className="card latest-event-card text-left"
                style={{ width: "28rem" }}
            >
                <img src={this.props.img} className="card-img-top" alt="..." />
                <div className="card-body latest-event-card-body">
                    <h5 className="card-title latest-event-card-title">
                        {this.props.title}
                    </h5>
                    <p className="card-text latest-event-card-desc">
                        {this.props.desc}
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
