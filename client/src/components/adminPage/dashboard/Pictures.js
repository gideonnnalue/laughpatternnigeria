import React, { Component } from "react";
import { Link } from "react-router-dom";
import { addImage, deleteImage } from "../../../actions/fileActions";
import img from "../../../assets/images/carousel11.jpg";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import isEmpty from "../../../validation/is-empty";
import Spinner from "../utils/Spinner";
import ImageModal from "../utils/ImagesModal";

class Pictures extends Component {
    constructor(props) {
        super(props);
        this.state = {
            modal: false,
            file: null,
            id: null
        };

        this.toggle = this.toggle.bind(this);
        this.onFileChange = this.onFileChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.onClearState = this.onClearState.bind(this);
        // this.onDelete = this.onDelete.bind(this);
    }

    toggle() {
        this.setState(prevState => ({
            modal: !prevState.modal
        }));
    }

    onFileChange(e) {
        this.setState({ file: e.target.files[0], loaded: 0 });
    }

    onSubmit() {
        this.onClearState();
        this.props.addImage({
            image: this.state.file
        });
    }

    onDelete(id) {
        this.props.deleteImage(id);
    }

    onClearState() {
        this.setState({
            file: null
        });
    }

    componentDidMount() {
        this.props.setHeading("Pictures");
    }

    render() {
        const { images, loading } = this.props.images;

        let allImages = (
            <div>
                <Spinner />
            </div>
        );

        if (!isEmpty(images) && !loading) {
            allImages = images.map((img, i) => (
                <div class="p-2 bg-white d-inline-block shadow-sm rounded mb-5 dashboard__body">
                    <div class="dashboard__top d-flex flex-row flex-wrap">
                        <div className="dashboard__overview d-inline">
                            <div class="card gallery__video-card">
                                <img
                                    width="200"
                                    src={`/api/images/${img._id}`}
                                    alt=".."
                                />
                            </div>
                            <div className="dashboard__overview--button text-center mt-4">
                                <a
                                    href="#"
                                    className="btns-text btns-text--red px-3"
                                    onClick={() => this.onDelete(img._id)}
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
                            <a
                                href="#"
                                className="btns btns--blue btns--custom-small btns--animated text-white ml-4"
                                onClick={this.toggle}
                            >
                                Add Pictures
                            </a>
                        </div>
                    </div>
                </div>

                <div className="d-flex flex-row justify-content-between flex-wrap">
                    {allImages}
                </div>
                <ImageModal
                    modal={this.state.modal}
                    toggle={this.toggle}
                    onFileChange={this.onFileChange}
                    onSubmit={this.onSubmit}
                />
            </div>
        );
    }
}

Pictures.propTypes = {
    setHeading: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
    images: state.images
});

export default connect(
    mapStateToProps,
    { addImage, deleteImage }
)(Pictures);
