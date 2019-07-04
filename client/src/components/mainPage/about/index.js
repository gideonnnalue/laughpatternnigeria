import React, { Component } from "react";
import PageHeader from "../../utils/PageHeader";
import Ceo from "./Ceo";
import Company from "./Company";

class About extends Component {
  
  componentWillUnmount() {
    this.props.turnOffNav();
  }
  render() {
    return (
      <main>
        <PageHeader title="About" />
        <Ceo />
        <Company />
      </main>
    );
  }
}

export default About;
