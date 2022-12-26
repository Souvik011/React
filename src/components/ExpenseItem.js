import ExpenseDate from './ExpenseDate';
import ExpenseDetails from './ExpenseDetails';
import './ExpenseItem.css';

function ExpenseItem(props) {

    return (<div className='expense-item'>
                <ExpenseDate date = {props.date}/>
                <ExpenseDetails amount = {props.amount} />  
                <div className='expense-item__description'>{props.Location}</div>
            </div>);
}

export default ExpenseItem;