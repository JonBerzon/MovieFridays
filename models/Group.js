const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const GroupSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    // owner: {
    //     type: Schema.Types.ObjectId,
    //     ref: 'users'
    // },
    owner: {
        type: Object,
        required: true
    },
    // users: [{type: Schema.Types.ObjectId, ref: 'users'}],
    users: [{type: Object}],

    // movies: [{ type: Schema.Types.ObjectId, ref: 'movies' }]
}, {
    timestamps: true
})

module.exports = Group = mongoose.model('Group', GroupSchema);