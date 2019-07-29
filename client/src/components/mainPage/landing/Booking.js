import React, { Component } from "react";
import { Link } from "react-router-dom";
import InputTextGroup from "../../utils/InputTextGroup";
import InputTextAreaGroup from "../../utils/InputTextAreaGroup";
import { connect } from "react-redux";
import { sendMail } from "../../../actions/authActions";

import Spinner from "../../utils/bookingSpinner";

class Booking extends Component {
    constructor(props) {
        super(props);

        this.state = {
            email: "",
            fullname: "",
            phoneno: "",
            subject: "",
            message: "",
            errors: null
        };

        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onChange(e) {
        this.setState({ [e.target.name]: e.target.value });
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.errors) {
            this.setState({ errors: nextProps.errors });
        }
    }

    onSubmit(e) {
        e.preventDefault();

        const emailUser = {
            email: this.state.email,
            fullname: this.state.fullname,
            phoneno: this.state.phoneno,
            subject: this.state.subject,
            message: this.state.message
        };

        this.props.sendMail(emailUser);

        this.setState({
            email: "",
            fullname: "",
            phoneno: "",
            subject: "",
            message: ""
        });

        // console.log(emailUser);

        // axios.post('/api/users/login', user)
        //     .then(data => console.log(data))
        //     .catch(err => this.setState({errors: err.response.data}));
    }
    render() {
        return (
            <section className="section-booking">
                <div className="container">
                    <h3 className="heading heading-primary py-5">Booking</h3>
                    <div className="row justify-content-center pt-5">
                        <div className="col booking-form">
                            <form onSubmit={this.onSubmit}>
                                <div className="form-row">
                                    <div className="form-group col-md-6">
                                        <InputTextGroup
                                            type="text"
                                            id="fullname"
                                            placeholder="Full Name"
                                            name="fullname"
                                            value={this.state.fullname}
                                            onChange={this.onChange}
                                            // errors={errors.email}
                                        />
                                    </div>
                                    <div className="form-group col-md-6">
                                        <InputTextGroup
                                            type="email"
                                            id="email"
                                            placeholder="Email"
                                            name="email"
                                            value={this.state.email}
                                            onChange={this.onChange}
                                            // errors={errors.email}
                                        />
                                    </div>
                                </div>
                                <div className="form-row">
                                    <div className="form-group col-md-6">
                                        <InputTextGroup
                                            type="number"
                                            id="phoneno"
                                            placeholder="Phone Number"
                                            name="phoneno"
                                            value={this.state.phoneno}
                                            onChange={this.onChange}
                                            // errors={errors.email}
                                        />
                                    </div>
                                    <div className="form-group col-md-6">
                                        <InputTextGroup
                                            type="text"
                                            id="subject"
                                            placeholder="Subject"
                                            name="subject"
                                            value={this.state.subject}
                                            onChange={this.onChange}
                                            // errors={errors.email}
                                        />
                                    </div>
                                </div>
                                <div className="form-group">
                                    <InputTextAreaGroup
                                        id="message"
                                        placeholder="Message"
                                        name="message"
                                        value={this.state.message}
                                        onChange={this.onChange}
                                        // errors={errors.email}
                                    />
                                </div>
                                <input
                                    type="submit"
                                    className="btns btns--red btns--forms btns--animated my-5 mx-auto w-100"
                                    value="Submit"
                                />
                            </form>
                            {this.props.auth.messageLoading ? (
                                <div
                                    style={{
                                        display: "block",
                                        textAlign: "center"
                                    }}
                                >
                                    <Spinner />
                                </div>
                            ) : null}
                            {this.state.errors ? (
                                <div
                                    style={{
                                        fontSize: "1.8rem",
                                        color: "#fd0101",
                                        fontWeight: "bold",
                                        textAlign: "center"
                                    }}
                                >
                                    {this.state.errors.errors}
                                </div>
                            ) : null}

                            {this.state.errors ? (
                                <div
                                    style={{
                                        fontSize: "1.8rem",
                                        color: "#06359b",
                                        fontWeight: "bold",
                                        textAlign: "center"
                                    }}
                                >
                                    {this.state.errors.noerror
                                        ? "Message Sent"
                                        : ""}
                                </div>
                            ) : null}
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

const mapStateToProps = state => ({
    auth: state.auth,
    errors: state.errors
});

export default connect(
    mapStateToProps,
    { sendMail }
)(Booking);
