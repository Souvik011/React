import './ExpenseDetails.css';

function ExpenseDetails(props) {
    return (
        <div className='expense-details'>
            <div className='expense-details__description'>{props.amount[0]}</div>
            <div className='expense-details__price'>${props.amount[1]}</div>
        </div>
    );
}

export default ExpenseDetails;