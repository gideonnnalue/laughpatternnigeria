import React from "react";
import PropTypes from 'prop-types';

const InputTextGroup = props => {
  return (
    <div>

      <input
        type={props.type}
        className="form-control input input-text"
        id={props.id}
        placeholder={props.placeholder}
      />
    </div>
  );
};

InputTextGroup.propTypes = {
    type: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    placeholder: PropTypes.string.isRequired,
}

export default InputTextGroup;
