const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//create profile schema and model for the teacher
const SubjectSchema = new Schema({
	subjectName: {
		type: String,
		required: true
	},
	teachers: [
		{
			type: mongoose.Schema.Types.ObjectId, ref: 'teacher' 
		}
    ],
    date: {
		type: Date,
		default: Date.now
	}
});


module.exports = mongoose.model('subject', SubjectSchema);