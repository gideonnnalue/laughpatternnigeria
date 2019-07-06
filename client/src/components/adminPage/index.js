import React, { Component } from "react";
import { Route, Switch, withRouter } from "react-router-dom";
import Dashboard from "./dashboard/Dashboard";
import AdminHeader from "./AdminHeader";
import Events from "./dashboard/Events";
import Members from "./dashboard/Members";

class Admin extends Component {
    componentWillUnmount() {
        this.props.turnOffNav();
    }
    render() {
        return (
            <div className="admin-page">
                <div className="container px-md-5">
                    {/* <!-- For demo purpose --> */}
                    <div class="row py-5 text-white">
                        <div class="col-lg-9 mx-auto text-center">
                            <h1 class="display-4">Bootstrap 4 vertical menu</h1>
                            <p class="lead mb-0">
                                Create nicely styled vertical menu using
                                Bootstrap 4.
                            </p>
                            <p class="lead">
                                Snippet by{" "}
                                <a
                                    href="https://bootstrapious.com/snippets"
                                    class="text-white text-underlined"
                                >
                                    <u>Bootstrapious</u>
                                </a>
                            </p>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div class="rounded">
                        <div class="row">
                            <AdminHeader />

                            <Switch>
                            <Route
                                    path={`${this.props.match.path}/members`}
                                    component={Members}
                                />
                                <Route
                                    path={`${this.props.match.path}/events`}
                                    component={Events}
                                />
                                <Route
                                    path={`${this.props.match.path}/dashboard`}
                                    component={Dashboard}
                                />
                                <Route
                                    exact
                                    path={this.props.match.path}
                                    render={() => <Dashboard />}
                                />
                            </Switch>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default withRouter(Admin);
