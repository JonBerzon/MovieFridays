const Validator = require('validator');
const validText = require('../valid-text');

module.exports = function validateCreateMovies(data) {
    let errors = {}

    data.title = validText(data.title) ? data.title : '';
    data.user_id = validText(data.user_id) ? data.user_id : '';
    

    if (Validator.isEmpty(data.title)) {
        errors.title = 'Title field is required';
    }

    if (Validator.isEmpty(data.user_id)) {
        errors.user_id = 'User_id is required';
    }

    return {
        errors,
        isValid: Object.keys(errors).length === 0
    }
}