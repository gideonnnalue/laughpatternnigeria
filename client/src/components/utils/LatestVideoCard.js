import React, { Component } from "react";

class LatestVideoCard extends Component {
    render() {
        return (
            <div className="latest-video__card text-white mr-2 mb-2">
                <iframe
                    style={{
                        width: "inherit",
                        height: "inherit"
                    }}
                    src="https://www.youtube.com/embed/JpzZXSdXSMo"
                />
                {/* <div
              style={{
                backgroundImage: `url(${this.props.img})`
              }}
              className="latest-video__card--img"
            >
              <div className="latest-video__card--overlay p-3">
                <h3 className="latest-video__title">Test title</h3> */}
                {/* <p className="text-bold latest-video__rating">{`${vote_average}/10`}</p> */}
                {/* <p className="latest-video__desc">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Quae quo suscipit minus non provident explicabo a
                  necessitatibus.
                </p>
              </div>
            </div> */}
            </div>
        );
    }
}

export default LatestVideoCard;
