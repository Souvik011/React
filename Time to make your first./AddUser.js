import React,{useState} from 'react';

import Card from '../UI/Card';
import Button from '../UI/Button';
import ErrorModel from '../UI/ErrorModel';
import classes from './AddUser.module.css';

const AddUser = (props) => {

    const [enteredUsername, setEnteredUsername] = useState('');
    const [enteredAge, setEnteredAge] = useState('');
    const[error,setError] = useState();

    const addUserHandler = (event) => {
        event.preventDefault();
        if(enteredUsername.trim().length === 0 || enteredAge.trim().length === 0){
            setError({
                title: 'Invalid Input!',
                message: 'Please Enter a Valid Name and Age (non-empty Values).'
            });
            return;
        }
        if(+enteredAge < 1){
            setError({
                title: 'Invalid Age!',
                message: 'Please Enter a Valid Age ( >0)'
            });
            return;
        }
        props.onUsers(enteredUsername,enteredAge);
        setEnteredUsername('');
        setEnteredAge('');
    };

    const usernameChangeHandler = (event) => {
        setEnteredUsername(event.target.value);
    };
    const ageChangeHandler = (event) => {
        setEnteredAge(event.target.value);
    };

    const errorHandler = () => {
        setError(null);
    }

    return (
        <div>
        {error && <ErrorModel title={error.title} message={error.message} onConfirm={errorHandler} /> }
       <Card className={classes.input}>
            <form onSubmit={addUserHandler}>
            <label htmlFor="username">UserName</label>
            <input id="username" type = "text" value={enteredUsername} onChange={usernameChangeHandler}/>
            <label htmlFor="age">Age</label>
            <input id="age" type = "number" value={enteredAge} onChange={ageChangeHandler}/>
            <Button type = "submit">ADD USER</Button>
            </form>
        </Card>
        </div>
    )
}

export default AddUser;