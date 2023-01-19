import React,{useState , Fragment , useRef} from 'react';

import Card from '../UI/Card';
import Button from '../UI/Button';
import ErrorModel from '../UI/ErrorModel';
import classes from './AddUser.module.css';

const AddUser = (props) => {

    const nameInputRef = useRef();
    const ageInputRef = useRef();
    const collegeInputRef = useRef();

    // const [enteredUsername, setEnteredUsername] = useState('');
    // const [enteredAge, setEnteredAge] = useState('');
    const[error,setError] = useState();

    const addUserHandler = (event) => {
        event.preventDefault();
        const enteredName = nameInputRef.current.value;
        const enteredUserage = ageInputRef.current.value;
        const enteredCollege = collegeInputRef.current.value;
        if(enteredName.trim().length === 0 || enteredUserage.trim().length === 0 || enteredCollege.trim().length === 0){
            setError({
                title: 'Invalid Input!',
                message: 'Please Enter a Valid Name, Age and College (non-empty Values).'
            });
            return;
        }
        if(+enteredUserage < 1){
            setError({
                title: 'Invalid Age!',
                message: 'Please Enter a Valid Age ( >0)'
            });
            return;
        }
        props.onUsers(enteredName,enteredUserage,enteredCollege);
        nameInputRef.current.value = '';
        ageInputRef.current.value = '';
        collegeInputRef.current.value = '';
        // setEnteredUsername('');
        // setEnteredAge('');
    };

    // const usernameChangeHandler = (event) => {
    //     setEnteredUsername(event.target.value);
    // };
    // const ageChangeHandler = (event) => {
    //     setEnteredAge(event.target.value);
    // };

    const errorHandler = () => {
        setError(null);
    }

    return (
        <Fragment>
        {error && <ErrorModel title={error.title} message={error.message} onConfirm={errorHandler} /> }
       <Card className={classes.input}>
            <form onSubmit={addUserHandler}>
            <label htmlFor="username">UserName</label>
            <input id="username" type = "text" ref={nameInputRef}/>
            <label htmlFor="age">Age</label>
            <input id="age" type = "number" ref={ageInputRef}/>
            <label htmlFor="collegename">College Name</label>
            <input id="collegename" type = "text"  ref={collegeInputRef}/>
            <Button type = "submit">ADD USER</Button>
            </form>
        </Card>
        </Fragment>
    )
}

export default AddUser;