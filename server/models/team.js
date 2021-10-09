const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TeamSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    designation: {
        type: String,
        required: true,
    },
    imgUrl: {
        type: String,
        required: true,
    }
});

module.exports = mongoose.model('Team', TeamSchema);