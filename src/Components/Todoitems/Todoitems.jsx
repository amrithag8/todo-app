import { useState } from "react";
import "./Todoitem.css";
export const Todoitems = ({ item, todoList, setTodoList }) => {
  const [completedTodo, setcompletedTodo] = useState(false);
  const [editTodo, setEditTodo] = useState(false);
  const [editValue, setEditValue] = useState();

  const deleteHandler = (_id) => {
    let filteredTodo = todoList.filter((el) => {
      return el.id !== _id;
    });
    setTodoList(filteredTodo);
    localStorage.setItem("TODO", JSON.stringify(filteredTodo));
  };

  const completeTaskHandler = (_id) => {
    let completedUpdate = todoList.map((item) => {
      if (item.id === _id) {
        return { ...item, completed: !item.completed };
      }
      return item;
    });

    setTodoList(completedUpdate);
    localStorage.setItem("TODO", JSON.stringify(completedUpdate));
  };

  const editTodoHandler = (_id) => {
    todoList.map((item) => {
      if (item.id === _id) {
        return setEditTodo(!editTodo);
      }
    });
  };

  const saveClickHandler = (id) => {
    if (editValue === "") {
      alert("Please enter some value");
    } else {
      let updatedArr = todoList.map((item) => {
        if (item.id === id) {
          return { ...item, todos: editValue };
        } else return item;
      });

      localStorage.setItem("TODO", JSON.stringify(updatedArr));

      setTodoList(updatedArr);
      setEditTodo(false);
    }
  };

  return (
    <>
      <div className="todo-item">
        {editTodo ? (
          <div className="edit">
            <input
              type="text"
              name="edit-text"
              defaultValue={item.todos}
              onChange={(event) => setEditValue(event.target.value)}
            />
            <button
              className="save-button"
              onClick={() => saveClickHandler(item.id)}
            >
              SAVE
            </button>
            <button
              className="cancel-button"
              onClick={() => setEditTodo(false)}
            >
              CANCEL
            </button>
          </div>
        ) : (
          <>
            <div
              className={item.completed ? "completed" : "todolist"}
              onClick={() => completeTaskHandler(item.id)}
            >
              {item.todos}{" "}
            </div>
            <img
              src="./images/image7.png"
              alt=""
              className="edit-image"
              onClick={() => editTodoHandler(item.id)}
            />
            <img
              src="./images/image9.png"
              alt=""
              className="delete-image"
              onClick={() => deleteHandler(item.id)}
            />
          </>
        )}
      </div>
    </>
  );
};
