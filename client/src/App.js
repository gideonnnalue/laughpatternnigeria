import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import $ from "jquery";
import Popper from "popper.js";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./assets/styles/sass/styles.scss";
import Navigation from "./components/navigation";
import Footer from "./components/footer";
import Landing from "./components/mainPage/landing";
import About from "./components/mainPage/about";
import Events from "./components/mainPage/events";
import NewsFeed from "./components/mainPage/newsfeed";
import Gallery from "./components/mainPage/gallery";
import Members from "./components/mainPage/members";
import SingleEvent from "./components/mainPage/singleEvent";
import SingleNewsFeed from "./components/mainPage/singleNewsFeed";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      navShow: false
    };

    this.showNav = this.showNav.bind(this);
    this.turnOffNav = this.turnOffNav.bind(this);
  }

  componentDidMount() {
    const ele = document.getElementById("ipl-progress-indicator");
    if (ele) {
      // fade out
      ele.classList.add("available");
      setTimeout(() => {
        // remove from DOM
        ele.outerHTML = "";
      }, 2000);
    }
    // this.authenticate().then(() => {
    //   const ele = document.getElementById('ipl-progress-indicator');
    //   if(ele){
    //     // fade out
    //     ele.classList.add('available')
    //     setTimeout(() => {
    //       // remove from DOM
    //       ele.outerHTML = ''
    //     }, 2000)
    //   }
    // })
  }

  authenticate() {
    return new Promise(resolve => setTimeout(resolve, 2000));
  }

  showNav() {
    this.setState({ navShow: !this.state.navShow });
  }

  turnOffNav() {
    this.setState({ navShow: false });
  }

  render() {
    return (
      <Router>
        <div className="App">
          <Navigation showNav={this.showNav} navShow={this.state.navShow} />
          <Route
            path="/"
            exact
            render={routeProps => (
              <Landing {...routeProps} turnOffNav={this.turnOffNav} />
            )}
          />
          <Route
            path="/about"
            render={routeProps => (
              <About {...routeProps} turnOffNav={this.turnOffNav} />
            )}
          />
          <Route
            path="/events"
            render={routeProps => (
              <Events {...routeProps} turnOffNav={this.turnOffNav} />
            )}
          />
          <Route
            path="/news"
            render={routeProps => (
              <NewsFeed {...routeProps} turnOffNav={this.turnOffNav} />
            )}
          />
          <Route
            path="/gallery"
            render={routeProps => (
              <Gallery {...routeProps} turnOffNav={this.turnOffNav} />
            )}
          />
          <Route
            path="/members"
            render={routeProps => (
              <Members {...routeProps} turnOffNav={this.turnOffNav} />
            )}
          />
          <Route
            path="/event/:eventID"
            render={routeProps => (
              <SingleEvent {...routeProps} turnOffNav={this.turnOffNav} />
            )}
          />

          <Route
            path="/newsfeed/:newsfeedID"
            render={routeProps => (
              <SingleNewsFeed {...routeProps} turnOffNav={this.turnOffNav} />
            )}
          />
          {/* <Route exact path="/" component={Landing} /> */}
          {/* <Route exact path="/about" component={About} /> */}
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
