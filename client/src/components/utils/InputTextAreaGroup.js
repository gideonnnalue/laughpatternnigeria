import React from "react";
import PropTypes from "prop-types";

const InputTextAreaGroup = props => {
    return (
        <textarea
            className="form-control input"
            id={props.id}
            placeholder={props.placeholder}
            rows="6"
            name={props.name}
            value={props.value}
            onChange={props.onChange}
        />
    );
};

InputTextAreaGroup.propTypes = {
    id: PropTypes.string.isRequired,
    placeholder: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired
};

export default InputTextAreaGroup;
