import React from "react";
import logo from "../../assets/images/lpn-large.png";
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <footer className="">
            <div className="section-footer">
                <div className="container">
                    <div className="row text-white">
                        <div className="col-md-3 mb-5">
                            <img src={logo} alt="" />
                        </div>
                        <div className="col-md-2 mb-5">
                            <div>
                                <h3>PAGES</h3>
                            </div>
                            <div>
                                <Link to="/">Home</Link>
                            </div>
                            <div>
                                <Link to="/about">About</Link>
                            </div>
                            <div>
                                <Link to="/events">Events</Link>
                            </div>
                            <div>
                                <Link to="/news">News Feed</Link>
                            </div>
                        </div>
                        <div className="col-md-2 mb-5">
                            <div>
                                <h3>MEMBERSHIP</h3>
                            </div>
                            <div>
                                <Link to="/">Home</Link>
                            </div>
                            <div>
                                <Link to="/gallery">Gallery</Link>
                            </div>
                            <div>
                                <Link to="/events">Events</Link>
                            </div>
                        </div>
                        <div className="col-md-2 mb-5">
                            <div>
                                <h3>RESOURCES</h3>
                            </div>
                            <div>
                                <a href="#">News</a>
                            </div>
                            <div>
                                <a href="#">Publications</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="developer-attribute p-4">
                <div className="container">
                    <div className="row">
                        <div className="col">
                            © Copyright 2019 – Developed by Gideon
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
