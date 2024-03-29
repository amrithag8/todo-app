import { useState, useEffect } from "react";
import "./styles/global.css";
import { Newtodo } from "./Components/Newtodo/Newtodo";
import { Todoitems } from "./Components/Todoitems/Todoitems";
import axios from "axios";



function App() {
  const [todo, setTodo] = useState("");
  const [todoList, setTodoList] = useState([]);


  const loadFunction=async()=>{
    const res=await axios("http://localhost:3006/api/todo");
    // console.log(res.data);
    setTodoList(res.data);
    
    }

    // console.log("todoList",todoList )
    
    useEffect(()=>{
      loadFunction();
    }, []);

  return (
    <div className="App-main">
      <div className="todoListOuter">
        <Newtodo
          todo={todo}
          setTodo={setTodo}
          todoList={todoList}
          setTodoList={setTodoList}
        />

        {todoList.map((item) => {
          return (
            <Todoitems
              key={item.id}
              item={item}
              todoList={todoList}
              setTodoList={setTodoList}
              todo={todo}
            />
          );
        })}
      </div>
    </div>
  );
}

export default App;
