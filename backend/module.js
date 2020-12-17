const mongoose = require('mongoose');

const teamSchema = new mongoose.Schema({
	date : {type:Date, required:true},
	country:[{
		country:{type:String, required:true},
		cases:{type:Number, require:true},
		deaths:{type:Number, require:true},
		recovered:{type:Number, require:true}
	}],
	state:[{
		state:{type:String, required:true},
		cases:{type:Number, required:true},
		deaths:{type:Number, required:true},
		recovered:{type:Number, required:true}
	}]
});

const covidData = mongoose.model("CovidData", teamSchema);

module.exports = covidData;