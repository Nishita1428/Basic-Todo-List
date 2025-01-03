import {useState} from "react";
import {v4 as uuidv4} from 'uuid';
export default function TodoList() {
    let[todos, setTodos] = useState([{task:"Sample Task", id:uuidv4()}]);
    let[newTodos, setNewTodos] = useState("");

    let addnewtask = () =>{
        //    console.log("we have to add A task");
        setTodos((prevTodos)=>{
        return[...prevTodos,{task:newTodos, id:uuidv4()}];
    });
    
        setNewTodos("");    //to make placeholder empty after adding a task
    }

    let updateTodoValue = (event) => {
        // console.log(event.target.value);
        setNewTodos(event.target.value);
    };

    let deleteTodo = (id)=>{
         setTodos((prevTodos)=>todos.filter((prevTodos)=>prevTodos.id != id));
    };

  return (
    <>
      <input placeholder="Add a task" value={newTodos} onChange={updateTodoValue}></input>
      <br></br>
      <button onClick={addnewtask}>Add Task</button>
      
      <br></br>
      <br></br>
      <br></br>
      <hr></hr>
      <h1>task to todo</h1>
      <ul>
           {
            todos.map((todo) => (
                <li key={todo.id}>
                    <span>{todo.task}</span>
                    &nbsp;&nbsp;&nbsp;
                    <button onClick={()=>deleteTodo(todo.id)}>delete</button>
                </li>
            ))
          }
      </ul>
    </>
  );
}
