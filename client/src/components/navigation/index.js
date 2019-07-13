import React, { Component } from "react";
import { NavLink, Link } from "react-router-dom";
import logo from "../../assets/images/lpn-large.png";
import { connect } from "react-redux";
import PropTypes from "prop-types";

class navigation extends Component {
    // constructor(props) {
    //   super(props);
    //   this.state = {
    //     navShow: false
    //   }

    //   this.showNav = this.showNav.bind(this);
    // }

    // showNav() {
    //   this.setState({ navShow: !this.state.navShow})
    // }
    render() {
        return (
            <div className="navigation">
                <Link to="/">
                    <div className="navigation__logo">
                        <img src={logo} alt="laugh pattern nigeria" />
                    </div>
                </Link>

                <input
                    type="checkbox"
                    className="navigation__checkbox"
                    id="navi-toggle"
                    onClick={this.props.showNav}
                />

                <label htmlFor="navi-toggle" className="navigation__button">
                    <span className="navigation__icon">&nbsp;</span>
                </label>

                <div
                    className={`navigation__background ${
                        this.props.navShow ? "navigation__background-show" : ""
                    }`}
                >
                    &nbsp;
                </div>

                <nav
                    className={`navigation__nav ${
                        this.props.navShow ? "navigation__nav-show" : ""
                    }`}
                >
                    <ul className="navigation__list">
                        <li className="navigation__item">
                            <NavLink to="/" className="navigation__link">
                                <span>01 </span>Home
                            </NavLink>
                        </li>
                        <li className="navigation__item">
                            <NavLink to="/about" className="navigation__link">
                                <span>02 </span>About
                            </NavLink>
                        </li>
                        <li className="navigation__item">
                            <NavLink to="/events" className="navigation__link">
                                <span>03 </span>Events
                            </NavLink>
                        </li>
                        <li className="navigation__item">
                            <NavLink to="/news" className="navigation__link">
                                <span>04 </span>News Feed
                            </NavLink>
                        </li>
                        <li className="navigation__item">
                            <NavLink to="/gallery" className="navigation__link">
                                <span>05 </span>Gallery
                            </NavLink>
                        </li>
                        {/* <li className="navigation__item">
                            <NavLink to="/members" className="navigation__link">
                                <span>06 </span>Members
                            </NavLink>
                        </li> */}
                        {this.props.auth.isAuthenticated ? (
                            <li className="navigation__item">
                                <NavLink
                                    to="/dashboard"
                                    className="navigation__link"
                                >
                                    <span>07 </span>Dashboard
                                </NavLink>
                            </li>
                        ) : (
                            ""
                        )}
                    </ul>
                </nav>
            </div>
        );
    }
}

navigation.propTypes = {
    auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    auth: state.auth
});

export default connect(mapStateToProps)(navigation);
