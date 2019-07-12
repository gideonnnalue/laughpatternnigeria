const validator = require("validator");
const isEmpty = require("./is-empty");

module.exports = function validateEventInput(data) {
    let errors = {};

    data.title = !isEmpty(data.title) ? data.title : "";
    data.details = !isEmpty(data.details) ? data.details : "";

    if (validator.isEmpty(data.title)) {
        errors.title = "Title field is required";
    }

    if (validator.isEmpty(data.details)) {
        errors.details = "Detail field is required";
    }

    return {
        errors,
        isValid: isEmpty(errors)
    };
};
