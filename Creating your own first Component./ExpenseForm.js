import React from "react";
import './ExpenseForm.css';

const ExpenseForm = () => {

    const titleChangeHandler = (event) => {
        console.log(event.target.value);
    };

    return(
        <form>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <level>Title</level>
                    <input type="text" onChange={titleChangeHandler} />
                </div>

                <div className="new-expense__control">
                    <level>Amount</level>
                    <input type="number" min="0.01" step="0.01" onChange={titleChangeHandler} />
                </div>

                <div className="new-expense__control">
                    <level>Date</level>
                    <input type="date" min="2019-01-01" max="2023-12-31" onChange={titleChangeHandler} />
                </div>
            </div>
            <div className="new-expense__actions">
                <button type="submit">Add Expense</button>
            </div>
        </form>


    );
};

export default ExpenseForm;