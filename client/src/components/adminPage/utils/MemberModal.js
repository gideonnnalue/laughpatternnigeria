import React, { Component } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import InputTextGroup from "../../utils/InputTextGroup";
import InputTextAreaGroup from "../../utils/InputTextAreaGroup";
import PropTypes from "prop-types";

class EventModal extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    componentWillUnmount() {}
    render() {
        return (
            <div className="section-event-modal">
                <Modal
                    isOpen={this.props.modal}
                    toggle={this.props.toggle}
                    className="section-event-modal"
                    centered
                >
                    <ModalHeader toggle={this.props.toggle}>
                        <h1>Add Events</h1>
                    </ModalHeader>
                    <ModalBody>
                        <section className="event-modal">
                            <div class="container-fluid p-5">
                                <h2 className="text-white lead">
                                    Upload Event Image
                                </h2>
                                <div class="input-group mb-3">
                                    {/* <div class="input-group-prepend">
                                        <span
                                            class="input-group-text"
                                            id="inputGroupFileAddon01"
                                        >
                                            Upload
                                        </span>
                                    </div> */}

                                    <div class="custom-file">
                                        <input
                                            type="file"
                                            class="custom-file-input"
                                            id="inputGroupFile01"
                                            aria-describedby="inputGroupFileAddon01"
                                            name="file"
                                            onChange={this.props.onFileChange}
                                        />
                                        <label
                                            class="custom-file-label"
                                            for="inputGroupFile01"
                                        >
                                            Choose file
                                        </label>
                                    </div>
                                </div>

                                <h2 className="text-white lead">Member Name</h2>
                                <div className="form-group">
                                    <InputTextGroup
                                        type="text"
                                        id="name"
                                        placeholder="Member Name"
                                        name="name"
                                        value={this.props.name}
                                        onChange={this.props.onChange}
                                    />
                                </div>

                                <h2 className="text-white lead">Member Job</h2>
                                <div className="form-group">
                                    <InputTextGroup
                                        type="text"
                                        id="job"
                                        placeholder="Member Job"
                                        name="job"
                                        value={this.props.job}
                                        onChange={this.props.onChange}
                                    />
                                </div>

                                <h2 className="text-white lead">
                                    Member Description
                                </h2>

                                <div className="form-group">
                                    <InputTextAreaGroup
                                        id="member-details"
                                        placeholder="Member Details"
                                        name="desc"
                                        value={this.props.desc}
                                        onChange={this.props.onChange}
                                    />
                                </div>
                            </div>
                        </section>
                    </ModalBody>
                    <ModalFooter>
                        <Button
                            color="primary"
                            onClick={() => {
                                this.props.toggle();
                                this.props.onSubmit();
                            }}
                        >
                            save
                        </Button>{" "}
                        <Button color="secondary" onClick={this.props.toggle}>
                            Cancel
                        </Button>
                    </ModalFooter>
                </Modal>
            </div>
        );
    }
}

EventModal.propTypes = {
    toggle: PropTypes.func.isRequired,
    modal: PropTypes.bool.isRequired
};

export default EventModal;
