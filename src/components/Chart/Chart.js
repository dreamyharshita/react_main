import React from "react";
import ChartBar from './ChartBar';
 import './Chart.css';


const Chart= props =>{

const dataPointValues= props.datapoints.map(datapoint => datapoint.value);
const totalmax=Math.max(...dataPointValues);
console.log("Maxvalue",totalmax);
return (<div className="chart">
    {props.datapoints.map((datapoint)=>(
    <ChartBar 
    key={datapoint.label}
    value={datapoint.value} 
    maxvalue={totalmax} 
    label={datapoint.label}/>)
)}

</div>
)
}
export default Chart;