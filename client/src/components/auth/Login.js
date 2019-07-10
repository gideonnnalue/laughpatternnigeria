import React, { Component } from "react";
import InputTextGroup from "../utils/InputTextGroup";
import axios from "axios";
import { connect } from "react-redux";
import { loginUser } from "../../actions/authActions";
import PropTypes from "prop-types";

class Login extends Component {
    constructor(props) {
        super(props);

        this.state = {
            email: "",
            password: "",
            errors: {}
        }
        
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    componentDidMount() {
        if(this.props.auth.isAuthenticated) {
            this.props.history.push("/dashboard")
        }
    }

    componentWillReceiveProps(nextProps) {
        if(nextProps.auth.isAuthenticated) {
            this.props.history.push("/dashboard");
        }
        if(nextProps.errors) {
            this.setState({errors: nextProps.errors})
        }
    }

    onChange(e) {
        this.setState({ [e.target.name]: e.target.value});
    }

    onSubmit(e) {
        e.preventDefault();

        const user = {
            email: this.state.email,
            password: this.state.password
        }

        this.props.loginUser(user);

        // axios.post('/api/users/login', user)
        //     .then(data => console.log(data))
        //     .catch(err => this.setState({errors: err.response.data}));
    }

    render() {
        const { errors } = this.state;

        return (
            <div className="section-login">
                <div className="container h-100">
                    <div className="row align-items-center h-100 justify-content-center">
                        <div className="col">
                            <div className="login__card d-block mx-auto p-5 text-center">
                                <h3>Admin Login</h3>
                                <form onSubmit={this.onSubmit} className="mt-5">
                                    <div className="">
                                        <div className="form-group mb-5">
                                            <InputTextGroup
                                                type="email"
                                                id="email"
                                                placeholder="Email"
                                                name="email"
                                                value={this.state.email}
                                                onChange={this.onChange}
                                                errors={errors.email}
                                            />
                                        </div>
                                        <div className="form-group" style={{ marginBottom: "7rem"}}>
                                            <InputTextGroup
                                                type="password"
                                                id="password"
                                                placeholder="Password"
                                                name="password"
                                                value={this.state.password}
                                                onChange={this.onChange}
                                                errors={errors.password}
                                            />
                                        </div>
                                    </div>

                                    <input
                                        type="submit"
                                        className="btns btns--red btns--forms btns--animated my-5 mx-auto w-100 mt-5"
                                        value="Submit"
                                        
                                    />
                                </form>
                                <hr/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

Login.propTypes = {
    auth: PropTypes.object.isRequired,
    errors: PropTypes.object.isRequired,
    loginUser: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
    auth: state.auth,
    errors: state.errors
})

export default connect(mapStateToProps, { loginUser })(Login);
