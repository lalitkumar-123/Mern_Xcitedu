const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const TestimonialsSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    content: {
        type: String,
        required: true,
    },
    imgUrl: {
        type: String,
        required: true,
    }
});


module.exports = mongoose.model('Testimonial', TestimonialsSchema);