import { confirmAlert } from 'react-confirm-alert'; // Import 
import './App.css';
import React, { useState } from 'react';
import './App.css';
import './bootstrap/dist/css/bootstrap.css'
import 'react-confirm-alert/src/react-confirm-alert.css'
import {MDBRow,MDBCol} from 'mdbreact';
import UserTable from './usertable'
import AddUserForm from './adduser'
	const App = () => {
const usersData = [ ]
	const initialFormState = { name: '', username: '', description: '', photo: []}

	const [ users, setUsers ] = useState(usersData)
	const [ currentUser, setCurrentUser ] = useState(initialFormState)
	const [count, setCount] = useState(0);
  const addUser = user => {
		setUsers([ ...users, user ])
		user.photo = document.getElementById("output")
  }
 
	return (
		<div  className="container">
			<div className="flex-row">
				<div className="flex-large">
          <AddUserForm addUser={addUser} />
				</div>
	 			<div className="flex-large">
          <UserTable users={users} setCurrentUser={setCurrentUser} currentUser={ currentUser} setCount={setCount}
					count={count}/>
		  
				</div>
			</div>
		</div>
	)
}
  export default App;

	