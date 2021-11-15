const Validator = require('validator');
const validText = require('../valid-text');

module.exports = function validateCreateInput(data){
    let errors = {}

    data.name = validText(data.name) ? data.name : '';
    data.owner_id = validText(data.owner_id) ? data.owner_id : '';

    if (Validator.isEmpty(data.name)) {
        errors.name = 'Name field is required';
    }

    if (Validator.isEmpty(data.owner_id)) {
        errors.owner_id = 'Owner_id is required';
    }

    return {
        errors,
        isValid: Object.keys(errors).length === 0
    }
}