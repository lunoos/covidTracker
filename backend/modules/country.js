const mongoose = require('mongoose');

const countrySchema = new mongoose.Schema({
	date : {type:String, required:true},
	country:[{
		country:{type:String, required:true},
		cases:{type:Number, require:true},
		deaths:{type:Number, require:true},
		recovered:{type:Number, require:true}
	}]
});

const countryData = mongoose.model("countryData", countrySchema);

module.exports = countryData;