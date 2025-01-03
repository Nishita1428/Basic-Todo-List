import {useState} from "react";
import {v4 as uuidv4} from 'uuid';
export default function TodoList() {
    let[todos, setTodos] = useState([{task:"Sample Task", id:uuidv4(), isDone:false}]);
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

    let markAsDone = (id) => {
        setTodos((prevTodos) => 
            prevTodos.map((todo)=>{
                if(todo.id==id){
                    return{
                        ...todo,
                        isDone:true,
                    };
                }else{
                    return todo;
                }
            })
        );
    };

    let markAsDoneAll = () => {
        setTodos((prevTodos) => 
            prevTodos.map((todo)=>{
               return{
                ...todo,
                isDone:true,
               };
            })
        );
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
                    <span style={todo.isDone?{textDecorationLine:"line-through"}:{}}>{todo.task}</span>
                    &nbsp;&nbsp;&nbsp;
                    <button onClick={()=>deleteTodo(todo.id)}>delete</button>
                    <button onClick={()=>markAsDone(todo.id)}>M-A-D</button>
                </li>
            ))
          }
      </ul>
      <br></br>
      <button onClick = {markAsDoneAll}>M-A-D-A</button>
    </>
  );
}
