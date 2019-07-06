import React, { Component } from "react";

class AdminHeader extends Component {
    render() {
        return (
            <div class="col-lg-4 mb-4 mb-lg-0">
                {/* <!-- Vertical Menu--> */}
                <nav class="nav flex-column bg-white shadow-sm rounded p-3">
                    <a href="#" class="nav-link px-4 rounded-pill">
                        <i class="fas fa-folder-minus mr-2"></i>
                        Dashboard
                        <span class="badge badge-primary px-2 rounded-pill ml-2">
                            45
                        </span>
                    </a>
                    <a href="#" class="nav-link px-4 rounded-pill">
                        <i class="fa fa-pie-chart mr-2" />
                        Another action here
                        <span class="badge badge-primary px-2 rounded-pill ml-2">
                            12
                        </span>
                    </a>
                    <a
                        href="#"
                        class="nav-link px-4 active bg-primary text-white shadow-sm rounded-pill"
                    >
                        <i class="fa fa-line-chart mr-2" />
                        Active link
                        <span class="badge badge-light text-primary px-2 rounded-pill ml-2">
                            17
                        </span>
                    </a>
                    <a href="#" class="nav-link px-4 rounded-pill">
                        <i class="fa fa-area-chart mr-2" />
                        Action here
                        <span class="badge badge-primary px-2 rounded-pill ml-2">
                            32
                        </span>
                    </a>
                    <a href="#" class="nav-link px-4 rounded-pill">
                        <i class="fa fa-th-large mr-2" />
                        Another action here
                    </a>
                    <a href="#" class="nav-link px-4 rounded-pill">
                        <i class="fa fa-line-chart mr-2" />
                        Action here
                    </a>
                    <a href="#" class="nav-link px-4 disabled">
                        <i class="fa fa-pie-chart mr-2" />
                        Disabled link
                    </a>
                </nav>
                {/* <!-- End --> */}
            </div>
        );
    }
}

export default AdminHeader;
