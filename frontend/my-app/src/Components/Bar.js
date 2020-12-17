import react from 'react';
import { Bar } from 'react-chartjs-2';

const BarGraph = ({country, recovered, deaths}) => {
	return (
		<Bar 
        data = {{labels: country,
        datasets: [{
            label: 'deaths',
            data: deaths,
            backgroundColor: 
                'rgba(255, 99, 132, 0.2)'
            ,
            borderColor: 
                'rgba(255, 99, 132, 1)'
            ,
            borderWidth: 2
        },
        {
        label: "recovered",
        data: recovered,
        backgroundColor:'rgba(255, 206, 86, 0.2)',
        borderColor:'rgba(255, 206, 86, 0.4)',
        borderWidth: 3
      }
       ]
      }}
      height={400}
      width={600}
      options={{
        maintainAspectRatio: false,
      }}
      />
		)
}

export default BarGraph;