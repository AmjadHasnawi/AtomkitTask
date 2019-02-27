const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const StudentSchema = new Schema({
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
		required: true
	},
	password: {
		type: String,
		required: false
    },
    image: {
		type: String,
		required: false,
		default:"https://vignette.wikia.nocookie.net/kalbo-kinis-kintab/images/c/c5/Facebook-default-no-profile-pic.jpg/revision/latest/scale-to-width-down/480?cb=20131120043048"
	},
	date: {
		type: Date,
		default: Date.now
	}
});


module.exports = mongoose.model("student", StudentSchema);;