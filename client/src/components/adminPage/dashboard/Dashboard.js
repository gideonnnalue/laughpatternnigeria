import React, { Component } from "react";
import { Link } from "react-router-dom";

class Dashboard extends Component {

    componentDidMount() {
        this.props.setHeading("Dashboard")
    }

    render() {
        return (
            <div class="col-lg-8 mb-5">
                {/* <!-- Demo Content--> */}
                <div class="p-5 bg-white d-flex align-items-center shadow-sm rounded mb-5 dashboard__body">
                    <div class="dashboard__top d-flex ">
                        <div className="dashboard__overview d-flex flex-row align-items-center justify-content-between">
                            <div className="dashboard__overview--icon mr-md-5 color-primary">
                                <i class="fa fa-users fa-3x" />
                            </div>
                            <div className="dashboard__overview--text mr-md-5">
                                <h3>Members</h3>
                                <p>
                                    View and manage all members of laugh Pattern
                                    Nigeria
                                </p>
                            </div>
                            <div className="dashboard__overview--button">
                                <Link
                                    to="/dashboard/members"
                                    className="btns btns--red btns--custom-small btns--animated text-white"
                                >
                                    All Members
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="p-5 bg-white d-flex align-items-center shadow-sm rounded mb-5 dashboard__body">
                    <div class="dashboard__top d-flex ">
                        <div className="dashboard__overview d-flex flex-row align-items-center justify-content-between">
                            <div className="dashboard__overview--icon mr-md-5 color-tetiary">
                                <i class="fas fa-calendar-alt fa-3x"></i>
                            </div>
                            <div className="dashboard__overview--text mr-md-5">
                                <h3>Events</h3>
                                <p>
                                    View and manage all members of laugh Pattern
                                    Nigeria
                                </p>
                            </div>
                            <div className="dashboard__overview--button">
                                <Link
                                    to="/dashboard/events"
                                    className="btns btns--blue btns--custom-small btns--animated text-white"
                                >
                                    All Events
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="p-5 bg-white d-flex align-items-center shadow-sm rounded mb-5 dashboard__body">
                    <div class="dashboard__top d-flex ">
                        <div className="dashboard__overview d-flex flex-row align-items-center justify-content-between">
                            <div className="dashboard__overview--icon mr-md-5 color-secondary">
                                <i class="fas fa-photo-video fa-3x"></i>
                            </div>
                            <div className="dashboard__overview--text mr-md-5">
                                <h3>Videos</h3>
                                <p>
                                    View and manage all members of laugh Pattern
                                    Nigeria
                                </p>
                            </div>
                            <div className="dashboard__overview--button">
                                <Link
                                    to="/dashboard/events"
                                    className="btns btns--yellow btns--custom-small btns--animated text-white"
                                >
                                    All Videos
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            
        );
    }
}

export default Dashboard;
