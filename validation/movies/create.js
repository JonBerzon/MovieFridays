const Validator = require('validator');
const validText = require('../valid-text');

module.exports = function validateCreateMovies(data) {
    let errors = {}

    data.title = validText(data.title) ? data.title : '';
    data.submitter_id = validText(data.submitter_id) ? data.submitter_id : '';
    

    if (Validator.isEmpty(data.title)) {
        errors.title = 'Title field is required';
    }

    if (Validator.isEmpty(data.submitter_id)) {
        errors.submitter_id = 'User_id is required';
    }

    return {
        errors,
        isValid: Object.keys(errors).length === 0
    }
}