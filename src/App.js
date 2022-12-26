import ExpenseItem from "./components/ExpenseItem";
import './App.css';

function App() {
  const expenses = [
    {
      id: 'e1',
      title: 'Toilet Paper',
      amount: 94.12,
      date: new Date(2020, 7, 14),
      LocationOfExpenditure: 'Kolkata',
    },
    { id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12) , LocationOfExpenditure: 'Bengaluru',},
    {
      id: 'e3',
      title: 'Car Insurance',
      amount: 294.67,
      date: new Date(2021, 2, 28),
      LocationOfExpenditure: "Mumbai",
    },
    {
      id: 'e4',
      title: 'New Desk (Wooden)',
      amount: 450,
      date: new Date(2021, 5, 12),
      LocationOfExpenditure: 'Delhi',
    },
  ];
  const result = [];
  expenses.forEach((key) => {
    result.push
    (<ExpenseItem date = {key.date} amount = {[key.title , key.amount]} Location = {key.LocationOfExpenditure}></ExpenseItem>)
  })

  return (
    <div className="App">
      <h1>Expense Items!</h1>
      {/* <ExpenseItem date = {expenses[0].date} title= {expenses[0].title} amount = {expenses[0].amount} Location = {expenses[0].LocationOfExpenditure}> </ExpenseItem>
      <ExpenseItem date = {expenses[1].date} title= {expenses[1].title} amount = {expenses[1].amount} Location = {expenses[1].LocationOfExpenditure}> </ExpenseItem>
      <ExpenseItem date = {expenses[2].date} title= {expenses[2].title} amount = {expenses[2].amount} Location = {expenses[2].LocationOfExpenditure}> </ExpenseItem>
      <ExpenseItem date = {expenses[3].date} title= {expenses[3].title} amount = {expenses[3].amount} Location = {expenses[3].LocationOfExpenditure}> </ExpenseItem>
    </div> */}
    {result}
    </div>
  );
}

export default App;
