import React from 'react';
import '../../src/App.scss';

import { Doughnut } from 'react-chartjs-2';
import {Chart, ArcElement} from 'chart.js';
import Labels from './Labels';
// import {Chart, Filler} from 'chart.js';

Chart.register(ArcElement);


const config = {
  data:{
    datasets: [{
      data: [300, 50, 100],
      backgroundColor: [
        'rgb(255, 99, 132)',
        'rgb(54, 162, 235)',
        'rgb(255, 205, 86)'
      ],
      hoverOffset: 4,
      borderRadius: 5,
      spacing:5,
    }]
  },
  options:{
    cutout:115
  }
}

function Graph() {
  return (
    <div>

<div className='chart'>
  
<Doughnut {...config}></Doughnut>
<div className='number'>
<h4>Total</h4>
<span >${0}</span>

</div>

{/* labels start */}
<div className='labels'>
<Labels></Labels>
</div>


</div>

  
</div>
  )
}

export default Graph