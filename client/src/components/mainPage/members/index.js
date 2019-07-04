import React, { Component } from "react";
import PageHeader from "../../utils/PageHeader";

class index extends Component {

  componentWillUnmount() {
    this.props.turnOffNav();
  }

  render() {
    return (
      <div>
        <PageHeader title="Members" />
      </div>
    );
  }
}

export default index;
