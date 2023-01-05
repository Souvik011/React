import React from 'react';

import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';
import Expenses from './Expenses';
import './ExpenseItem.css';

const ExpenseItem = (props) => {
  const clickHandler = () => {
    Expenses.pop();
  };
  return (
    <Card className='expense-item'>
      <ExpenseDate date={props.date} />
      <div className='expense-item__description'>
        <h2>{props.title}</h2>
        <div className='expense-item__price'>${props.amount}</div>
      </div>
      <button onClick={clickHandler}>Delete Expense</button>
    </Card>
  );
}

export default ExpenseItem;