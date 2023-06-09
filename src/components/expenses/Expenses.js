import React, { useState } from 'react';

import Expenseslist from './Expenseslist';
import Card from '../ui/Card';
import ExpensesFilter from './ExpensesFilter';
import './Expenses.css';
import ExpensesChart from './ExpensesChart';

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState('2020');

  const filterChangeHandler = selectedYear => {
    setFilteredYear(selectedYear);
  };
  const filteredExpenses = props.items.filter(expen =>
    {
      return expen.date.getFullYear().toString()===filteredYear;
    }) 


  return (
    <div>
      <Card className='expenses'>
        <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler} />
       
      <ExpensesChart expenses={filteredExpenses}/>
      <Expenseslist items={filteredExpenses}/>
      </Card>
    </div>
  );
};

export default Expenses;