import React, { Component } from "react";
import PageHeader from "../../utils/PageHeader";
import Feeds from "./Feeds";
import PropTypes from 'prop-types';

class NewsFeed extends Component {

  componentWillUnmount() {
    this.props.turnOffNav();
  }

  render() {
    return (
      <div>
        <PageHeader title="News Feed" />
        <Feeds />
      </div>
    );
  }
}

NewsFeed.propTypes = {
  turnOffNav: PropTypes.func
}

export default NewsFeed;
