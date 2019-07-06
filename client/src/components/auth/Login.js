import React, { Component } from "react";
import InputTextGroup from "../utils/InputTextGroup";

class Login extends Component {
    render() {
        return (
            <div className="section-login">
                <div className="container h-100">
                    <div className="row align-items-center h-100 justify-content-center">
                        <div className="col">
                            <div className="login__card d-block mx-auto p-5 text-center">
                                <h3>Admin Login</h3>
                                <form action="" className="mt-5">
                                    <div className="">
                                        <div className="form-group mb-5">
                                            <InputTextGroup
                                                type="email"
                                                id="email"
                                                placeholder="Email"
                                            />
                                        </div>
                                        <div className="form-group" style={{ marginBottom: "7rem"}}>
                                            <InputTextGroup
                                                type="password"
                                                id="password"
                                                placeholder="Password"
                                            />
                                        </div>
                                    </div>

                                    <input
                                        type="button"
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

export default Login;
