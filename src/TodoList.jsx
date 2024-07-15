import React,{useState} from 'react'
import { ToastContainer, toast } from 'react-toastify'
function TodoList() {

 const [ tasks , setTasks] = useState([])
 const [ newtask , setNewtask] = useState("")

 function handleInputChange(event) {
  setNewtask(event.target.value)
 }
 function addTask() {
  if(newtask.trim()!==""){
  setTasks(t=>[...t,newtask])
  setNewtask("");
  }
 }
 function deleteTask(index) {
   alert("Sure you wanna remove")
    const updatedTasks = tasks.filter((ele,i)=>i!==index)
    setTasks(updatedTasks)
 }
 function moveTaskUp(index) {
     if(index > 0){
      const updatedTasks = [...tasks];
      [updatedTasks[index],updatedTasks[index-1]] = 
      [updatedTasks[index-1],updatedTasks[index]];
      setTasks(updatedTasks);
     }
 } 
 function moveTaskDown(index) {
   if(index < tasks.length -1 ){
    const updatedTasks = [...tasks];
    [updatedTasks[index],updatedTasks[index+1]] = 
    [updatedTasks[index+1],updatedTasks[index]];
    setTasks(updatedTasks);
   }
 }

  return (
    <div className='to-do-list'>
    <h1 style={{textAlign:'center'}}>To-Do-List</h1>
    <div  style={{textAlign:'center'}}>
      <input 
      type="text"
      placeholder='Enter a task....'
      value = {newtask} 
      onChange={handleInputChange}
      />
      <button
      className='addButton'
      onClick={addTask}
      >ADD
      </button>
      <div style={{display:'flex', justifyContent:'center'}}>
      <ol>
        {tasks.map((task,index)=>
          <li  key={index}>
          <span  className='text'> {task}</span>
          <button
              className='delete-button'
              onClick={()=>deleteTask(index)}>
              Delete
          </button>
          <ToastContainer/>
          <button 
              className='move-button' 
              onClick={()=>moveTaskUp(index)}>
              MoveTask-Up
          </button>
          <button 
              className='move-button' 
              onClick={()=>moveTaskDown(index)}>
              MoveTask-Down
          </button>
          </li>
        )}
      </ol>
      </div>
    </div>
    




   </div>
  )
}

export default TodoList

