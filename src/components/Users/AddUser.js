import React, {useState, useRef} from 'react'
import Card    from '../UI/Card'
import Button  from '../UI/Button'
import classes from './AddUser.module.css'
import ErrorModal from '../UI/ErrorModal'
import Wrapper from '../Helpers/Wrapper'

export default function AddUser(props) {
 const nameInputRef = useRef()
 const ageInputRef = useRef()
 const[error, setError] = useState('')

 const addUserHandler = event =>{
  const enteredName = nameInputRef.current.value
  const enteredAge  = ageInputRef.current.value
  event.preventDefault()
  if (enteredName.trim().length === 0 || enteredAge.trim().length === 0) {
   setError({
    title: 'Invalid input',
    message: 'Please enter a valid name and age (non-empty values)'
   })
   return
  }
  if (+enteredAge < 1) {
   setError({
    title: 'Invalid age',
    message: 'Please enter a valid age (> 0)'
   })
   return
  }
  props.onAddUser(enteredName, enteredAge)
 }

 const errorHandler = () => {
  setError(null)
 }

 return (
  <Wrapper>
   {error && <ErrorModal title={error.title} message={error.message} onConfirm={errorHandler}/>}
   <Card className={classes.input}>
    <form onSubmit={addUserHandler}>
     <label htmlFor="user-name">User Name</label>
     <input 
      id="user-name" 
      type="text"
      ref={nameInputRef}
      />

     <label htmlFor="user-age">Age (years)</label>
     <input 
      id="user-age"
      type="number"
      ref={ageInputRef}
      />

     <Button type="submit"> Add User</Button>
    </form>
   </Card>
  </Wrapper>
 )
}
