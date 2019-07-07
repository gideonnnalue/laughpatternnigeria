import React, { Component } from "react";
import { Link } from "react-router-dom";
import img from "../../../assets/images/carousel11.jpg";
import PropTypes from 'prop-types';
import EventModal from "../utils/EventModal";

class Events extends Component {
    constructor(props) {
        super(props);
        this.state = {
          modal: false
        };
    
        this.toggle = this.toggle.bind(this);
      }
    
      toggle() {
        this.setState(prevState => ({
          modal: !prevState.modal
        }));
      }

    componentDidMount() {
        this.props.setHeading("Events")
    }

    render() {
        return (
            <div class="col-lg-8 mb-5">
                {/* <!-- Demo Content--> */}
                <div class="p-3 bg-white d-flex align-items-center shadow-sm rounded mb-5 dashboard__body">
                    <div class="dashboard__top d-flex ">
                        <div className="dashboard__overview d-flex flex-row align-items-center justify-content-around">
                            <button
                                to="/"
                                className="btns btns--blue btns--custom-small btns--animated text-white ml-4"
                                onClick={this.toggle}
                            >
                                Add Events
                            </button>
                        </div>
                    </div>
                </div>

                <div class="p-5 bg-white d-flex align-items-center shadow-sm rounded mb-5 dashboard__body">
                    <div class="dashboard__top d-flex ">
                        <div className="dashboard__overview d-flex flex-row align-items-center justify-content-around">
                            <div className="dashboard__overview--icon mr-md-5 color-primary">
                                <img src={img} alt="" width="150" />
                            </div>
                            <div className="dashboard__overview--text mr-md-5 ml-3 mt-sm-5">
                                <h3>Event 1</h3>
                                <p>
                                    View and manage all members of laugh Pattern
                                    Nigeria
                                </p>
                            </div>
                            <div className="dashboard__overview--button">
                                <Link to="/" className="btns-text px-4 mr-4">
                                    Edit
                                </Link>
                                <Link
                                    to="/"
                                    className="btns-text btns-text--red px-3"
                                >
                                    Delete
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
                <EventModal modal={this.state.modal} toggle={this.toggle} />
            </div>
        );
    }
}

Events.propTypes = {
    setHeading: PropTypes.func.isRequired
}

export default Events;
