import React from 'react';
import Expenseitem from './Expenseitem';
import './expenseslist.css'
const Expenseslist= (props) =>{
    
    if(props.items.length===0) {
     return <h2 className='expenses-list__fallback'>FOUND NO EXPENSE</h2>
    }
    return <ul className="expenses-list">
{props.items.map((expense)=>(
        <Expenseitem 
        key={expense.id}
        title={expense.title}
        amount={expense.amount}
        date={expense.date}
        />
      ))}
    </ul>
};
export default Expenseslist;