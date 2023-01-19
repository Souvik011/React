import React , {useState} from 'react';

import AddUser from './component/Users/AddUser';
import UsersList from './component/Users/UsersList';


function App() {
  const[usersList,setUsersList] = useState([])
const usersHandler = (name,age,clg) => {
  setUsersList((prevUsersList) => {
    return [...prevUsersList, {name:name, age:age , college:clg , id: Math.random().toString()}];
  }
  );
};

  return (
    <div>
      <AddUser onUsers={usersHandler}/>
      <UsersList users = {usersList}/>
    </div>
  );
}

export default App;
