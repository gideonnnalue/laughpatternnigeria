import React from 'react';
import PropTypes from 'prop-types';

const InputTextAreaGroup = (props) => {
    return (
        <textarea className="form-control input" id={props.id} placeholder={props.placeholder} rows="6"></textarea>
    );
};

InputTextAreaGroup.propTypes = {
    id: PropTypes.string.isRequired,
    placeholder: PropTypes.string.isRequired,
}

export default InputTextAreaGroup;