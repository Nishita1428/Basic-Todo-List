import {useState} from "react";
export default function TodoList() {
    let[todos, setTodos] = useState(["Sleep"]);
    let[newTodos, setNewTodos] = useState("");

    let addnewtask = () =>{
        //    console.log("we have to add A task");
        setTodos([...todos, newTodos]);
        setNewTodos("");    //to make placeholder empty after adding a task
    }

    let updateTodoValue = (event) => {
        // console.log(event.target.value);
        setNewTodos(event.target.value);
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
                <li>{todo}</li>
            ))
          }
      </ul>
    </>
  );
}
