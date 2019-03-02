const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//create profile schema and model for the teacher
const CourseSchema = new Schema({
	courseName: {
		type: String,
		required: true
    },
    firstname: {
		type: String,
		required: true
    },
    lastname: {
		type: String,
		required: true
    },
    email: {
		type: String,
		required: false
	},
    field: {
		type: String,
		required: true
    },
    price: {
		type: String,
		required: true
    },
    numberOfHours: {
		type: String,
		required: true
    },
    image: {
		type: String,
		required: false,
		default:'https://www.eigenheimreal.com/avatar_mann.png'
	},
    date: {
		type: Date,
		default: Date.now
	}
});


module.exports = mongoose.model('course', CourseSchema);