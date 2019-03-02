const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//create profile schema and model for the teacher
const TeacherSchema = new Schema({
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
	info: {
		type: String,
		required: false
	},
	image: {
		type: String,
		required: false,
		default:'https://www.eigenheimreal.com/avatar_mann.png'
	},
	courses: [
		{
			type: mongoose.Schema.Types.ObjectId, ref: 'course' 
		}
	],
	date: {
		type: Date,
		default: Date.now
	}
});


module.exports = mongoose.model('teacher', TeacherSchema);