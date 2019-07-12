import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import {
    getAllMembers,
    addMember,
    deleteMember,
    editMember
} from "../../../actions/memberActions";
import img from "../../../assets/images/carousel11.jpg";
import PropTypes from "prop-types";
import MemberModal from "../utils/MemberModal";
import Spinner from "../utils/Spinner";
import isEmpty from "../../../validation/is-empty";
import EditMemberModal from "../utils/EditMemberModal";

class Members extends Component {
    constructor(props) {
        super(props);
        this.state = {
            modal: false,
            editModal: false,
            name: "",
            job: "",
            desc: "",
            file: null,
            id: null
        };

        this.toggle = this.toggle.bind(this);
        this.onFileChange = this.onFileChange.bind(this);
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.onEditSubmit = this.onEditSubmit.bind(this);
        this.onClearState = this.onClearState.bind(this);
        this.onDelete = this.onDelete.bind(this);
        this.editToggle = this.editToggle.bind(this);
    }

    componentDidMount() {
        this.props.setHeading("Members");
        this.props.getAllMembers();
    }

    toggle() {
        this.setState(prevState => ({
            modal: !prevState.modal
        }));
    }

    editToggle() {
        this.setState(prevState => ({
            editModal: !prevState.editModal
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
        this.props.addMember({
            name: this.state.name,
            job: this.state.job,
            desc: this.state.desc,
            memberImage: this.state.file
        });
    }

    onEditSubmit() {
        this.props.editMember({
            id: this.state.id,
            name: this.state.name,
            job: this.state.job,
            desc: this.state.desc,
            memberImage: this.state.file
        });
        this.onClearState();
    }

    onDelete(eventId) {
        this.props.deleteMember(eventId);
    }

    onClearState() {
        this.setState({
            name: "",
            job: "",
            desc: "",
            file: null,
            id: null
        });
    }

    render() {
        const { members, loading } = this.props.members;

        let allMembers = (
            <div>
                <Spinner />
            </div>
        );

        if (!isEmpty(members) && !loading) {
            allMembers = this.props.members.members.map((member, i) => (
                <div
                    class="p-5 bg-white d-flex align-items-center shadow-sm rounded mb-5 dashboard__body"
                    key={i}
                >
                    <div class="dashboard__top d-flex ">
                        <div className="dashboard__overview d-flex flex-row align-items-center justify-content-around">
                            <div className="dashboard__overview--icon mr-md-5 color-primary">
                                <img
                                    src={`/api/members/member/${
                                        member._id
                                    }/image`}
                                    alt=""
                                    width="150"
                                />
                            </div>
                            <div className="dashboard__overview--text mr-md-5 ml-3 mt-sm-5">
                                <h3>{member.name}</h3>
                                <h6 className="text-muted">{member.job}</h6>
                                <p className="mt-3">{member.desc}</p>
                            </div>
                            <div className="dashboard__overview--button">
                                <a
                                    className="btns-text px-4 mr-4"
                                    href="#"
                                    onClick={() => {
                                        this.editToggle();
                                        this.setState({ id: member._id });
                                    }}
                                >
                                    Edit
                                </a>
                                <a
                                    href="#"
                                    className="btns-text btns-text--red px-3"
                                    onClick={() => this.onDelete(member._id)}
                                >
                                    Delete
                                </a>
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
                                Add Members
                            </button>
                        </div>
                    </div>
                </div>

                {allMembers}

                <MemberModal
                    modal={this.state.modal}
                    toggle={this.toggle}
                    onFileChange={this.onFileChange}
                    onChange={this.onChange}
                    name={this.state.name}
                    job={this.state.job}
                    desc={this.state.desc}
                    onSubmit={this.onSubmit}
                />

                {/* <EditMemberModal
                    modal={this.state.editModal}
                    toggle={this.editToggle}
                    onFileChange={this.onFileChange}
                    onChange={this.onChange}
                    title={this.state.title}
                    desc={this.state.desc}
                    onSubmit={this.onEditSubmit}
                /> */}
            </div>
        );
    }
}

Members.propTypes = {
    setHeading: PropTypes.func.isRequired,
    getAllMembers: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
    members: state.members
});

export default connect(
    mapStateToProps,
    { getAllMembers, addMember, deleteMember, editMember }
)(Members);
