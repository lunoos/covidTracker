import react from 'react';
import "./row.css";

function Row({data, colName}){
	const d1 = colName[0];
	return(
	<div style={{
 		height: "500px",
  	    overflow: "auto",
  	    margin: "auto",
        width: "70%",
        border: "3px solid green",
        padding: "10px"
  	    }}>
	<div className="container" style = {{backgroundColor:"#FF7F50", opacity:".6"}}>
		<div ><h3>{colName[0].toUpperCase()}</h3></div>
		<div><h3>CASES</h3></div>
		<div><h3>DEATHS</h3></div>
		<div><h3>RECOVERED</h3></div>
	</div>
	{ data.map((data, i) => <div key={i} style={{backgroundColor:"pink", opacity:".6",border: "3px solid gray" , margin:"3px",borderRadius:"5px"}}>
		<div className="container">
			<div><h4>{colName[0]==="country"?data.country:data.state}</h4></div>
			<div><h5>{colName[0]==="country"?data.cases:data.confirmed}</h5></div>
			<div><h5>{data.deaths}</h5></div>
			<div><h5>{data.recovered}</h5></div>
		</div></div>) }
	</div>
	);
}

export default Row;