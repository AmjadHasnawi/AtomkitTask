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
	password: {
		type: String,
		required: false
	},
	imageURL: {
		type: String,
		required: false
	},
	teacherMajor: {
		type: String,
		required: false
	},
	info: {
		type: String,
		required: false
	},
	price: {
		type: Number,
		required: false
	},
	image: {
		type: String,
		required: false,
		default:'https://www.eigenheimreal.com/avatar_mann.png'
	},
	rating:{
		type:Number,
		required: false,
		default:1
	},
	rateCount:{
		type:Number,
		required:false,
		default:1
	},
	students: [
		{
			type: mongoose.Schema.Types.ObjectId, ref: 'student' 
		}
	]
});


module.exports = mongoose.model('teacher', TeacherSchema);