import React from "react";
import logo from "../../assets/images/lpn-large.png";

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
                <h3>ASSOCIATION</h3>
              </div>
              <div>
                <a href="#">About NSIC</a>
              </div>
              <div>
                <a href="#">Conference</a>
              </div>
              <div>
                <a href="#">Leadership</a>
              </div>
            </div>
            <div className="col-md-2 mb-5">
              <div>
                <h3>MEMBERSHIP</h3>
              </div>
              <div>
                <a href="#">FAQS</a>
              </div>
              <div>
                <a href="#">Join NSIC</a>
              </div>
              <div>
                <a href="#">Members Directory</a>
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
            <div className="col">© Copyright 2019 – Developed by Gideon</div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
