const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const GroupSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    owner: {
        type: Object,
        required: true
    },
    users: [{type: Object}],
}, {
    timestamps: true
})

module.exports = Group = mongoose.model('Group', GroupSchema);