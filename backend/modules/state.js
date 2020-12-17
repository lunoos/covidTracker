const mongoose = require('mongoose');

const stateSchema = new mongoose.Schema({
	date : {type:String, required:true},
	state:[{
		state:{type:String, required:true},
		confirmed:{type:Number, required:true},
		deaths:{type:Number, required:true},
		recovered:{type:Number, required:true}
	}]
});

const stateData = mongoose.model("stateData", stateSchema);

module.exports = stateData;