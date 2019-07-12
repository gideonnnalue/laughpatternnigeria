import React, { Component } from "react";
import { Route, Switch, withRouter } from "react-router-dom";
import Dashboard from "./dashboard/Dashboard";
import AdminHeader from "./AdminHeader";
import Events from "./dashboard/Events";
import Members from "./dashboard/Members";
import Videos from "./dashboard/Videos";
import Pictures from "./dashboard/Pictures";
import PrivateRoute from "../../utils/PrivateRoute";

class Admin extends Component {
    constructor(props) {
        super(props);
        this.state = {
            heading: ""
        };

        this.setHeading = this.setHeading.bind(this);
    }

    setHeading(heading) {
        this.setState({ heading });
    }

    componentWillUnmount() {
        console.log(this.props);
    }
    render() {
        return (
            <div className="admin-page">
                <div className="container px-md-5">
                    {/* <!-- For demo purpose --> */}
                    <div class="row py-5 text-white">
                        <div class="col-lg-9 mx-auto text-center">
                            <h1 class="display-4">{this.state.heading}</h1>
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
                                    render={routeProps => (
                                        <Members
                                            {...routeProps}
                                            setHeading={heading =>
                                                this.setHeading(heading)
                                            }
                                        />
                                    )}
                                />
                                <Route
                                    path={`${this.props.match.path}/events`}
                                    render={routeProps => (
                                        <Events
                                            {...routeProps}
                                            setHeading={heading =>
                                                this.setHeading(heading)
                                            }
                                        />
                                    )}
                                />
                                <Route
                                    path={`${this.props.match.path}/dashboard`}
                                    render={routeProps => (
                                        <Dashboard
                                            {...routeProps}
                                            setHeading={heading =>
                                                this.setHeading(heading)
                                            }
                                        />
                                    )}
                                />
                                <Route
                                    path={`${this.props.match.path}/videos`}
                                    render={routeProps => (
                                        <Videos
                                            {...routeProps}
                                            setHeading={heading =>
                                                this.setHeading(heading)
                                            }
                                        />
                                    )}
                                />

                                <Route
                                    path={`${this.props.match.path}/pictures`}
                                    render={routeProps => (
                                        <Pictures
                                            {...routeProps}
                                            setHeading={heading =>
                                                this.setHeading(heading)
                                            }
                                        />
                                    )}
                                />

                                <Route
                                    exact
                                    path={this.props.match.path}
                                    render={routeProps => (
                                        <Dashboard
                                            {...routeProps}
                                            setHeading={heading =>
                                                this.setHeading(heading)
                                            }
                                        />
                                    )}
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
