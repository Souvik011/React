import React, { useState } from 'react';

import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';
import Expenses from './Expenses';
import './ExpenseItem.css';

const ExpenseItem = (props) => {

  const[value, setValue] = useState(props.amount);

  const clickHandler = () => {
    setValue(100);
  };

  return (
    <Card className='expense-item'>
      <ExpenseDate date={props.date} />
      <div className='expense-item__description'>
        <h2>{props.title}</h2>
        <div className='expense-item__price'>${value}</div>
      </div>
      <button onClick={clickHandler}>Change Expense Value</button>
    </Card>
  );
}

export default ExpenseItem;