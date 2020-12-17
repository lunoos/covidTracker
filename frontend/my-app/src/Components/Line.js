import react from 'react';
import { Line } from 'react-chartjs-2';

function LineGraph({dailyconfirmed,dailyrecovered,date}){
	return (
		<Line 
        data = {{labels: date,
        datasets: [{
            label: 'India-dailyconfirmed',
            data: dailyconfirmed,
            backgroundColor: 
                'rgba(255, 99, 132, 0.2)'
            ,
            borderColor: 
                'rgba(255, 99, 132, 5)'
            ,
            borderWidth: 2
        },
        {
        label: "India-dailyrecovered",
        data: dailyrecovered,
        bezierCurve: true,
        lineTension: 0.8,
        backgroundColor:'rgba(152,251,152, 0.2)',
        borderColor:'rgba(152,251,152, 0.4)',
        borderWidth: 3
      }
       ]
      }}
      height={900}
      width={1500}
      options={{
        maintainAspectRatio: false,
      }}
      />
		)
}

export default LineGraph;