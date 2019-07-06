import React, { Component } from "react";
import { NavLink } from 'react-router-dom';

class AdminHeader extends Component {
    render() {
        return (
            <div class="col-lg-4 mb-4 mb-lg-0">
                {/* <!-- Vertical Menu--> */}
                <nav class="nav flex-column bg-white shadow-sm rounded p-3">
                    <NavLink to="/dashboard/dashboard" class="nav-link px-4 rounded-pill active">
                        <i class="fas fa-folder-minus mr-2"></i>
                        Dashboard
                    </NavLink>
                    <NavLink to="/dashboard/members" class="nav-link px-4 rounded-pill">
                        <i class="fa fa-users mr-2" />
                        Members
                        <span class="badge badge-primary px-2 rounded-pill ml-2">
                            12
                        </span>
                    </NavLink>
                    <NavLink
                        to="/dashboard/events"
                        class="nav-link px-4 bg-primary text-white shadow-sm rounded-pill"
                    >
                        <i class="fas fa-calendar-alt mr-2" />
                        Events
                        <span class="badge badge-light text-primary px-2 rounded-pill ml-2">
                            17
                        </span>
                    </NavLink>
                    <NavLink to="/dashboard/pictures" class="nav-link px-4 rounded-pill">
                        <i class="fas fa-photo-video mr-2" />
                        Pictures
                        <span class="badge badge-primary px-2 rounded-pill ml-2">
                            32
                        </span>
                    </NavLink>
                    <NavLink to="/dashboard/videos" class="nav-link px-4 rounded-pill">
                        <i class="fas fa-photo-video mr-2" />
                        Videos
                    </NavLink>
                    {/* <a href="#" class="nav-link px-4 rounded-pill">
                        <i class="fa fa-line-chart mr-2" />
                        Action here
                        <span class="badge badge-primary px-2 rounded-pill ml-2">
                            12
                        </span>
                    </a>
                    <a href="#" class="nav-link px-4 disabled">
                        <i class="fa fa-pie-chart mr-2" />
                        Disabled link
                    </a> */}
                </nav>
                {/* <!-- End --> */}
            </div>
        );
    }
}

export default AdminHeader;
