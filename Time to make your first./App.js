import React , {useState} from 'react';

import AddUser from './component/Users/AddUser';
import UsersList from './component/Users/UsersList';


function App() {
  const[usersList,setUsersList] = useState([])
const usersHandler = (name,age) => {
  setUsersList((prevUsersList) => {
    return [...prevUsersList, {name:name, age:age , id: Math.random().toString()}];
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
