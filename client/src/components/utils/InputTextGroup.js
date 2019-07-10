import React from "react";
import PropTypes from "prop-types";
import classnames from "classnames";

const InputTextGroup = props => {
    return (
        <div>
            {props.errors ? (
                <div style={{ color: "red", fontSize: "11px" }}>
                    {props.errors}
                </div>
            ) : null}
            <input
                type={props.type}
                className={classnames("form-control input input-text", {
                    "not-valid": props.errors
                })}
                id={props.id}
                placeholder={props.placeholder}
                name={props.name}
                value={props.value}
                onChange={props.onChange}
            />
        </div>
    );
};

InputTextGroup.propTypes = {
    type: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    placeholder: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired
};

export default InputTextGroup;
