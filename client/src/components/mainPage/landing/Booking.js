import React, { Component } from "react";
import { Link } from "react-router-dom";
import InputTextGroup from "../../utils/InputTextGroup";
import InputTextAreaGroup from "../../utils/InputTextAreaGroup";

class Booking extends Component {
  render() {
    return (
      <section className="section-booking">
        <div className="container">
          <h3 className="heading heading-primary py-5">Booking</h3>
          <div className="row justify-content-center pt-5">
            <div className="col booking-form">
              <form action="">
                <div className="form-row">
                  <div className="form-group col-md-6">
                    <InputTextGroup
                      type="text"
                      id="fullname"
                      placeholder="Full Name"
                    />
                  </div>
                  <div className="form-group col-md-6">
                    <InputTextGroup
                      type="email"
                      id="email"
                      placeholder="Email"
                    />
                  </div>
                </div>
                <div className="form-row">
                  <div className="form-group col-md-6">
                    <InputTextGroup
                      type="number"
                      id="phoneno"
                      placeholder="Phone Number"
                    />
                  </div>
                  <div className="form-group col-md-6">
                    <InputTextGroup
                      type="text"
                      id="subject"
                      placeholder="Subject"
                    />
                  </div>
                </div>
                <div className="form-group">
                  <InputTextAreaGroup id="message" placeholder="Message"/>
                </div>
                <input type="button" className="btns btns--red btns--forms btns--animated my-5 mx-auto w-100" value="Submit"/>
              </form>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Booking;
