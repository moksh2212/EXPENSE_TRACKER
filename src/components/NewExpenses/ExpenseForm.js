import React,{useState} from 'react';
import './ExpenseForm.css';

const ExpenseForm= (props)=> {
     const [enteredTitle,setEnteredTitle]=useState('');
     const [enteredAmount,setEnteredAmount]=useState('');
     const [enteredDate,setEnteredDate]=useState('');
    const titleChangeHandler = (event) =>{
        setEnteredTitle(event.target.value);
        console.log(
            {enteredTitle}
        )
    }
    const amountChangeHandler = (event) =>{
        setEnteredAmount(event.target.value);
    };
    const dateChangeHandler = (event) =>{
        setEnteredDate(event.target.value);
    }; 
    const SubmitHandler =(event)=> {
           event.preventDefault();
           const expensedata ={
            title:enteredTitle,
            amount:enteredAmount,
            date:new Date(enteredDate)

           };
           console.log(expensedata);
           props.onsaveexpensedatahandler(expensedata);
           setEnteredTitle('');
           setEnteredAmount('');
           setEnteredDate('');
    };
    return (
    <form onSubmit={SubmitHandler}>
        <div className="new-expense__control">
        <div className="new-expense__control">
            <label>enteredTitle</label>
            <input type='text'value={enteredTitle} onChange={titleChangeHandler} />

            </div>
            <div className="new-expense__control">
            <label>enteredAmount</label>
            <input type='number' value={enteredAmount} min="0.01" step="0.01" onChange={amountChangeHandler}/>
            
            </div> 
            <div className="new-expense__control">
            <label>enteredDate</label>
            <input type='date' value={enteredDate} min="2019-01-01" max="2022-12-31" onChange={dateChangeHandler}/>
            
            </div>        
        </div>
        <div className="new-expense__control">
            <button type="button" onClick={props.oncancel}>Cancel</button>
            <button type="submit">Add Expense</button>
            
            </div>   
    </form>
    )
}

export default ExpenseForm;