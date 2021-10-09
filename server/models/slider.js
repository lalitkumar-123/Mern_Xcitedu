const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const SliderSchema = new Schema({
    imgUrl: {
        type: String,
        required: true,
    }
});

module.exports = mongoose.model('Slider', SliderSchema);