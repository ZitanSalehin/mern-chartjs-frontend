import React from 'react';
import '../../src/App.scss';

import { Pie } from 'react-chartjs-2';
import {Chart, ArcElement} from 'chart.js';
// import {Chart, Filler} from 'chart.js';

Chart.register(ArcElement);


const config = {
  data:{
    datasets: [{
      data: [170, 50, 100,120],
      backgroundColor: [
        'rgb(255, 99, 132)',
        'rgb(54, 162, 235)',
        'rgb(255, 205, 86)',
        'rgb(66, 105, 155)'
      ],
      hoverOffset: 4,
      
    }]
  }
}

function PieChart() {
  return (
    <div>

<div className='chart'>
  
<Pie {...config}></Pie>
<div className='number'>
<h4>Total</h4>
<span >$3000</span>

</div>

<div className='labels'>
Amount
</div>


</div>

  
</div>
  )
}

export default PieChart