import React from 'react'
import '../../src/App.scss';
import { useForm } from 'react-hook-form';
import List from './List';
import {default as api} from '../store/apiSlice';

export default function Form() {

    const {register, handleSubmit, resetField} = useForm();
    const [addTransaction] = api.useAddTransactionMutation();

    const onSubmit = async (data) => {
        if(!data) return {};
        await addTransaction(data).unwrap();
        resetField('name');
        resetField('amount')
    }

  return (
    <div className="form">
        
        

        <form id='form' onSubmit={handleSubmit(onSubmit)}>
        <h1>Transaction</h1>
            <div className="grid">
                <div className="input-group">
                    <input type="text" {...register('name')}  placeholder='Sallary, House Rent' className='form-input' />
                </div>
                <select className='form-input' id='input__group' {...register('type')}>
                    <option value="Investment" defaultValue>Investment</option>
                    <option value="Expense">Expense</option>
                    <option value="Savings">Savings</option>
                </select>
                <div className="input-group">
                    <input type="text" {...register('amount')} placeholder='Amount' className='form-input' />
                </div>
                <div className="submit-btn">
                    <button className='submitBtn'>Make Transaction</button>
                </div>
            </div>    
        </form>

        <List></List>
    </div>
  )
}

