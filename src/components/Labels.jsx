import React from 'react';
import '../../src/App.scss';
import {default as api} from '../store/apiSlice';
import { getLabels } from '../helper/helper';


function Labels() {

    const { data, isFetching , isSuccess, isError } = api.useGetLabelsQuery()
    let Transactions;

    if(isFetching){
        Transactions = <div>Fetching</div>;
    }else if(isSuccess){
        Transactions = getLabels(data, 'type').map((v, i) => <LabelComponent key={i} data={v}></LabelComponent>);
    }else if(isError){
        Transactions = <div>Error</div>
    }
  return (
    <>
    {Transactions}
</>
  )
}

function LabelComponent({data}){
    if(!data) return <></>;
    return(
        <div className='labelContainer'>
        <div className='labels'>
            <h5 style={{background:data.color??"#ffff8e"}}>{data.type??""}</h5>
            <h4 >{Math.round(data.percent) ?? 0}%</h4>
        </div>
        </div>
    )
}

export default Labels