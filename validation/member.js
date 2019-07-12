const validator = require("validator");
const isEmpty = require("./is-empty");

module.exports = function validateMemberInput(data) {
    let errors = {};

    data.name = !isEmpty(data.name) ? data.name : "";
    data.job = !isEmpty(data.job) ? data.job : "";
    data.desc = !isEmpty(data.desc) ? data.desc : "";

    if (validator.isEmpty(data.name)) {
        errors.name = "Name field is required";
    }

    if (validator.isEmpty(data.job)) {
        errors.job = "Job field is required";
    }

    if (validator.isEmpty(data.desc)) {
        errors.desc = "Desc field is required";
    }

    return {
        errors,
        isValid: isEmpty(errors)
    };
};
