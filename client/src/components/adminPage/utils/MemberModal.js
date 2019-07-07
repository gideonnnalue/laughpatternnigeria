import React, { Component } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import InputTextGroup from "../../utils/InputTextGroup";
import InputTextAreaGroup from "../../utils/InputTextAreaGroup";
import PropTypes from 'prop-types';

class MemberModal extends Component {
    render() {
        return (
            <div className="section-member-modal">
                <Modal
                    isOpen={this.props.modal}
                    toggle={this.props.toggle}
                    className="section-member-modal"
                    centered
                >
                    <ModalHeader toggle={this.props.toggle}>
                        <h1>Add Members</h1>
                    </ModalHeader>
                    <ModalBody>
                        <section className="member-modal">
                            <div class="container-fluid p-5">
                                <h2 className="text-white lead">
                                    Upload Member Image
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
                                        />
                                        <label
                                            class="custom-file-label"
                                            for="inputGroupFile01"
                                        >
                                            Choose file
                                        </label>
                                    </div>
                                </div>

                                <h2 className="text-white lead">Member title</h2>
                                <div className="form-group">
                                    <InputTextGroup
                                        type="text"
                                        id="title"
                                        placeholder="Member Title"
                                    />
                                </div>

                                <h2 className="text-white lead">Members job</h2>
                                <div className="form-group">
                                    <InputTextGroup
                                        type="text"
                                        id="title"
                                        placeholder="Members Job"
                                    />
                                </div>

                                <h2 className="text-white lead">
                                    Event Description
                                </h2>

                                <div className="form-group">
                                    <InputTextAreaGroup
                                        id="event-details"
                                        placeholder="Event Details"
                                    />
                                </div>
                            </div>
                        </section>
                    </ModalBody>
                    <ModalFooter>
                        <Button color="primary" onClick={this.props.toggle}>
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

MemberModal.propTypes = {
    toggle: PropTypes.func.isRequired,
    modal: PropTypes.bool.isRequired
}

export default MemberModal;
