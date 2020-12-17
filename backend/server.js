const express = require("express");
const axios = require("axios");
const bodyParser = require('body-parser')
const logger = require('./shared/lib/logger')
const requestLogger = require('./shared/lib/requestlogger')
const expressRequestId = require('express-request-id')();
const mongoose = require('mongoose');
const countryData = require('./modules/country');
const stateData = require('./modules/state');


const app = express();
app.use(bodyParser.json());

//adding the rquest logger
app.use(requestLogger);
app.use(expressRequestId);

//connection to mongoose database

const mongodbUrl = 'mongodb+srv://neelam_user:fkvlUTPbxuSzWdd8@neelamdb.2lgbm.mongodb.net/covidData?retryWrites=true&w=majority';

mongoose.connect(mongodbUrl, {
	useNewUrlParser: true,
	useUnifiedTopology: true,
	useCreateIndex: true
}).catch(error => console.log(error.reason));

//country wise  data 
app.get('/', async (req, res)=>{
   let datetime = new Date();
    let p = datetime.toISOString().slice(0,10);
   axios.get('https://covid19-api.org/api/status')
  .then(async response =>  {
    //uploading the data to mongodb
    const product = await countryData.findOne({date: p});
    if(product===null){
    try{
	const entry = new countryData({
		date: p,
		country:response.data
	})
	const newEntry = await entry.save();
	if(newEntry){
		res.send(newEntry);
	}else{
		throw error;
	}
	}catch(err){
		logger.error("there was an error while fetching the country wise data");
		console.log(err);
	}}


    return res.send(response.data);
  })
  .catch(error => {
    console.log(error);
  });
 });

//state wise data
app.get('/statewise', async (req, res)=>{
    let datetime = new Date();
    let p = datetime.toISOString().slice(0,10);
   axios.get('https://api.covid19india.org/data.json')
  .then(async response => {

    //uploading the state data to mongodb
    let product = null;
    product = await stateData.findOne({date: p});
    if(product===null){
    try{
	const entry = new stateData({
		date: p,
		state:response.data.statewise
	})
	const newEntry = await entry.save();
	if(newEntry){
		res.send(newEntry);
	}else{
		throw error;
	}
	}catch(err){
		console.log(err);
	}}


    return res.send(response.data);
  })
  .catch(error => {
    console.log(error);
  });
 });

app.listen(5500, ()=>logger.info("APP LAUNCHED IN PORT 4000"));