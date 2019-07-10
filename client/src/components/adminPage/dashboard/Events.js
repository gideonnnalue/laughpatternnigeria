import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { getAllEvents, addEvent } from "../../../actions/eventActions";
import img from "../../../assets/images/carousel11.jpg";
import PropTypes from "prop-types";
import EventModal from "../utils/EventModal";
import Spinner from "../utils/Spinner";
import isEmpty from "../../../validation/is-empty";

class Events extends Component {
    constructor(props) {
        super(props);
        this.state = {
            modal: false,
            title: "",
            desc: "",
            file: null
        };

        this.toggle = this.toggle.bind(this);
        this.onFileChange = this.onFileChange.bind(this);
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.onClearState = this.onClearState.bind(this);
    }

    componentDidMount() {
        this.props.setHeading("Events");
        this.props.getAllEvents();
    }

    toggle() {
        this.setState(prevState => ({
            modal: !prevState.modal
        }));
    }

    onFileChange(e) {
        this.setState({ file: e.target.files[0], loaded: 0 });
    }

    onChange(e) {
        this.setState({ [e.target.name]: e.target.value });
    }

    onSubmit() {
        this.onClearState();
        this.props.addEvent({
            title: this.state.title,
            details: this.state.desc,
            eventImage: this.state.file
        });
    }

    onClearState() {
        this.setState({
            title: "",
            desc: "",
            file: null
        });
    }

    render() {
        const { events, loading } = this.props.events;

        let allEvents = (
            <div>
                <Spinner />
            </div>
        );

        if (!isEmpty(events) && !loading) {
            allEvents = this.props.events.events.map((event, i) => (
                <div
                    class="p-5 bg-white d-flex align-items-center shadow-sm rounded mb-5 dashboard__body"
                    key={i}
                >
                    <div class="dashboard__top d-flex ">
                        <div className="dashboard__overview d-flex flex-row align-items-center justify-content-around">
                            <div className="dashboard__overview--icon mr-md-5 color-primary">
                                <img
                                    src={`/api/events/event/${event._id}/image`}
                                    alt=""
                                    width="150"
                                />
                            </div>
                            <div className="dashboard__overview--text mr-md-5 ml-3 mt-sm-5">
                                <h3>{event.title}</h3>
                                <p>{event.details}</p>
                            </div>
                            <div className="dashboard__overview--button">
                                <a
                                    className="btns-text px-4 mr-4"
                                    href="#"
                                    onClick={this.toggle}
                                >
                                    Edit
                                </a>
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
            ));
        }

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

                {allEvents}

                <EventModal
                    modal={this.state.modal}
                    toggle={this.toggle}
                    onFileChange={this.onFileChange}
                    onChange={this.onChange}
                    title={this.state.title}
                    desc={this.state.desc}
                    onSubmit={this.onSubmit}
                />
            </div>
        );
    }
}

Events.propTypes = {
    setHeading: PropTypes.func.isRequired,
    getAllEvents: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
    events: state.events
});

export default connect(
    mapStateToProps,
    { getAllEvents, addEvent }
)(Events);
