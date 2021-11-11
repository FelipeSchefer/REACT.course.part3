import React, {useState} from 'react'
import Card    from '../UI/Card'
import Button  from '../UI/Button'
import classes from './AddUser.module.css'

export default function AddUser(props) {
 const[enteredUserName, setEnteredUserName] = useState('')
 const[enteredUserAge , setEnteredUserAge ] = useState('')

 const addUserHandler = event =>{
  event.preventDefault()
  if (enteredUserName.trim().length === 0 || enteredUserAge.trim().length === 0) {
   return
  }
  if (+enteredUserAge < 1) {
   return
  }
  props.onAddUser(enteredUserName, enteredUserAge)
  setEnteredUserName('')
  setEnteredUserAge('')
 }

 const usernameChangeHandler = event =>{
  setEnteredUserName(event.target.value)
 }

 const userageChangeHandler = event =>{
  setEnteredUserAge(event.target.value)
 }

 return (
  <Card className={classes.input}>
   <form onSubmit={addUserHandler}>
    <label htmlFor="user-name">User Name</label>
    <input 
     id="user-name" 
     type="text"
     value={enteredUserName}
     onChange={usernameChangeHandler}
    />

    <label htmlFor="user-age">Age (years)</label>
    <input 
     id="user-age"
     type="number"
     value={enteredUserAge}
     onChange={userageChangeHandler}
    />

    <Button type="submit"> Add User</Button>
   </form>
  </Card>
 )
}
