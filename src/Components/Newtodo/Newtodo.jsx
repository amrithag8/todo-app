import "./Newtodo.css";
import { useEffect } from "react";
export const Newtodo = ({ todo, setTodo, todoList, setTodoList }) => {
  const onClickHandler = () => {
    if (todo === "") {
      alert("Please enter some value");
    } else {
      setTodoList((prev) => {
        return [...prev, { todos: todo, id: Date.now(), completed: false }];
      });
      setTodo("");

      let newList = { todos: todo, id: Date.now(), completed: false };
      let allNewList = [...todoList, newList];
      // console.log("values are", allNewList);
      localStorage.setItem("TODO", JSON.stringify(allNewList));
    }
  };

  useEffect(() => {
    let localStorageData = localStorage.getItem("TODO");
    localStorageData && setTodoList(JSON.parse(localStorageData));
  }, []);

  return (
    <div className="newtodo">
      <p>Todo List</p>
      <div className="input-text">
        <input
          type="text"
          name="text"
          placeholder="New todo"
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
        />
        <button onClick={onClickHandler}>ADD TODO</button>
      </div>
    </div>
  );
};
