const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ApplicationSchema = new Schema({
    fname: {
        type: String,
        required: true,
    },
    lname: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    phone: {
        type: String,
        required: true,
    },
    jposition: {
        type: String,
        required: true,
    },
    imgUrl: {
        type: String,
        required: true,
    }
});

module.exports = mongoose.model('Application', ApplicationSchema);