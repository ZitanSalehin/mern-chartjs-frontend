import React from 'react';
import '../../src/App.scss';
import {default as api} from '../store/apiSlice';


function List() {

      const { data, isFetching , isSuccess, isError } = api.useGetLabelsQuery()
    const [deleteTransaction] = api.useDeleteTransactionMutation()
    let Transactions;

    
    const handlerClick = (e) => {
        if(!e.target.dataset.id) return 0;
        deleteTransaction({ _id : e.target.dataset.id })
    }

    if(isFetching){
        Transactions = <div>Fetching</div>;
    }else if(isSuccess){
        Transactions = data.map((v, i) => <Transaction key={i} category={v} handler={handlerClick} ></Transaction>);
    }else if(isError){
        Transactions = <div>Error</div>
    }

  return (
    <div className='listItems__container'>
    <h1>History</h1>
    {Transactions}
</div>
  )
}

function Transaction({category}){
    if(!category)return null;
    return(
        <div className='listItems'>
            <button className='submitBtn' style={{ background : `${category.color ??  "#e5e5e5"}`, margin:"30px", padding:"10px", width:"170px"}}>Delete</button>  
            <span>{category.name ??""}</span>
        </div>
    )
}

export default List