import React, { Component } from "react";
import PageHeader from "../../utils/PageHeader";
import AllEvents from './AllEvents';
import PropTypes from 'prop-types';

class Events extends Component {

  componentWillUnmount() {
    this.props.turnOffNav();
  }

  render() {
    return (
      <div>
        <PageHeader title="Events" />
        <AllEvents />
      </div>
    );
  }
}

Events.propTypes = {
  turnOffNav: PropTypes.func
}

export default Events;
