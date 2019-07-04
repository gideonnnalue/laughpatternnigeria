import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const NewsFeedCard = props => {
  const { img, by, date, heading, info, tags } = props.item;
  return (
    <div className="newsfeed__card">
      <div className="row">
        <div className="col-sm-12 col-md-6 newsfeed__image">
          <img src={`https://source.unsplash.com/random/${img}`} alt="..." />
          <div className="newsfeed__tags d-flex flex-row flex-wrap">
            {tags.map((tag, i) => (
              <div className="px-4 py-2 tag mr-3">{tag}</div>
            ))}
          </div>
        </div>
        <div className="col-sm-12 col-md-6 newsfeed__text">
          <Link to="/newsfeed/2343">
            <h3 className="newsfeed__heading">{heading}</h3>
          </Link>
          <div className="newsfeed__cite text-muted mb-5">
            {by} - <span className="newsfeed__date">{date}</span>
          </div>
          <div className="newsfeed__info">
            <p>{info}</p>
          </div>
          <div className="">
            <Link to="/newsfeed/2343" className="btns-text">
              Read more
            </Link>
          </div>
        </div>
      </div>
      <hr />
    </div>
  );
};

NewsFeedCard.propTypes = {
  item: PropTypes.object.isRequired
};

export default NewsFeedCard;
