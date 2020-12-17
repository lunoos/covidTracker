import react , {useState, useEffect} from 'react';
import './App.css';
import Row from './Components/Row';
import axios from 'axios';
import './Components/row.css';
import BarGraph from './Components/Bar';
import LineGraph from './Components/Line';



function App() {
  const [data, setData] = useState([]);
  const [stateData, setStateData] = useState([]);
  const [countryData, setCountryData] = useState([]);
  const [colName , setColName] = useState(["country", "cases"]);
  const [lineG, setLineG] = useState([]);
  
//tem code for testing
  
  let deaths = data.map(data => data.deaths);
  deaths = deaths.slice(0, 15);
  let country = data.map(data => data.country);
  country = country.slice(0,15);
  let recovered = data.map(data => data.recovered);
  recovered = recovered.slice(0, 15);
  const dailyconfirmed = lineG.map(data => data.dailyconfirmed );
  const dailyrecovered = lineG.map(data => Number(data.dailyrecovered));
  const date = lineG.map(data => data.date);

 


function handleView(e){
  if(data===countryData&&e===2){
  setData(stateData);
  setColName(["state", "confirmed"]);
}
  else if(e===1){
  setData(countryData);
  setColName(["country", "cases"]);
 }
}



useEffect(()=>{
  const fetchPosts = async () => {
      const res1 = await axios.get('http://localhost:5500');
      const res2 = await axios.get('http://localhost:5500/statewise');
      setStateData(res2.data.statewise);
      setData(res1.data);
      setCountryData(res1.data);
      setLineG(res2.data.cases_time_series);
    };
    fetchPosts();
},[])


  return (
    <div style={{maxWidth: "100rem", height: "40rem"}}>
    <div style={{backgroundImage: "url('https://pngimg.com/uploads/coronavirus/coronavirus_PNG20.png')" ,maxWidth: "100%", height: "100%"}}>
    <img style ={{  display: "block",
  marginLeft: "50%",
  width: "50%"}} src="https://cdn-a.william-reed.com/var/wrbm_gb_food_pharma/storage/images/publications/food-beverage-nutrition/foodnavigator-asia.com/headlines/policy/covid-19-in-malaysia-food-industry-recovery-thwarted-as-half-of-states-refuse-to-leave-lockdown/11373567-1-eng-GB/COVID-19-in-Malaysia-Food-industry-recovery-thwarted-as-half-of-states-refuse-to-leave-lockdown.jpg" alt="Covid-19" width="40%" height="28%" />
  <div className="container2" style={{margin:"0", width:"100%"}}>
    <button className = "button" onClick = {() =>handleView(1)} >
       Country wise
    </button>
    <button className = "button" onClick = {() =>handleView(2)} >
       State wise
    </button>
    <div style={{margin: "3px"}}>.</div> 
  </div>
    <Row  data={data} colName={colName}/>
    <h3 className="font">Number of Deaths and Recoveries in Different Countries</h3>
    <BarGraph country = {country} deaths = {deaths} recovered={recovered}/>
    <h3 className="font" >Number of Daily Confirmed Cases and Daily Recoveries in India</h3>
    <LineGraph dailyrecovered={dailyrecovered} dailyconfirmed={dailyconfirmed} date={date} />
    </div>
    </div>
  );
}

export default App;
