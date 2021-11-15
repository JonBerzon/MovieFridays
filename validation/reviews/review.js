const Validator = require('validator');
const validText = require('../valid-text');

module.exports = function validateReviewInput(data) {
    let errors = {}

    // data.rating = validText(data.rating) ? data.rating : '';


    // if (Validator.isInt(data.rating)) {
    //     errors.rating = 'Rating field is required';
    // }

    return {
        errors,
        isValid: Object.keys(errors).length === 0
    }
}