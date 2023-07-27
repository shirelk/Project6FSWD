import React, { useState, useEffect } from "react";
import Popup from "./Popup";

function Todos() {
  const [todos, setTodos] = useState([]);
  const [sortOption, setSortOption] = useState("");
  const [buttonAddTodo, setButtonAddTodo] = useState(false);
  const [buttonEditTodo, setButtonEditTodo] = useState(false);
  const [buttonDeleteTodo, setButtonDeleteTodo] = useState(false);
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("ourUser")));
  const [editedTodo, setEditedTodo] = useState(null);

  async function saveNewTodo() {
    const newTodoValue = document.getElementById("newTodo").value;
    const newTodo = {
      title: newTodoValue,
      completed: false,
      userId: user.id,
    };
    await fetch(`http://localhost:3000/todos/${user.id}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newTodo),
    });
    // Update the local state and todos in the UI
    setTodos((prevTodos) => [...prevTodos, newTodo]);
    document.getElementById("newTodo").value = "";
    setButtonAddTodo(false);
  }

  useEffect(() => {
    let user = JSON.parse(localStorage.getItem("ourUser"));

    fetch(`http://localhost:3000/todos/${user.id}`)
      .then((response) => response.json())
      .then((data) => {
        setTodos(data);
        localStorage.setItem("todos", JSON.stringify(data));
      });
  }, []);

  useEffect(() => {
    // Sort the todos whenever the sort option changes
    const sortedTodos = [...todos];
    if (sortOption === "byId") {
      sortedTodos.sort((a, b) => a.id - b.id);
    } else if (sortOption === "unchecked") {
      sortedTodos.sort((a, b) => a.completed - b.completed);
    } else if (sortOption === "checked") {
      sortedTodos.sort((a, b) => !a.completed - !b.completed);
    } else if (sortOption === "alphabet") {
      sortedTodos.sort((a, b) => a.title.localeCompare(b.title));
    } else if (sortOption === "random") {
      sortedTodos.sort(() => Math.random() - 0.5);
    }
    setTodos(sortedTodos);
  }, [sortOption]); // Include sortOption as a dependency

  function handleCheckChange(event, td) {
    const updatedTodos = todos.map((todo) => {
      if (todo.id === td.id) {
        return {
          ...todo,
          completed: event.target.checked,
        };
      }
      return todo;
    });
    setTodos(updatedTodos);
    localStorage.setItem("todos", JSON.stringify(updatedTodos));

    // Update the todos in the database
    fetch(`http://localhost:3000/todos/${td.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title: td.title,
        completed: event.target.checked,
        userId: td.userId,
      }),
    });
    // console.log("Updated todo in the database");
  }

  // New function to handle editing a todo item
  function handleEdit(todo) {
    setEditedTodo(todo);
    setButtonEditTodo(true);
  }

  async function saveEditedTodo() {
    // Implement the logic to save the edited todo to the database
    if (editedTodo) {
      // Update the todos in the database
      await fetch(`http://localhost:3000/todos/${editedTodo.id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title: editedTodo.title,
          completed: editedTodo.completed,
          userId: editedTodo.userId,
        }),
      });

      // Update the local state and todos in the UI
      setTodos((prevTodos) =>
        prevTodos.map((todo) => (todo.id === editedTodo.id ? editedTodo : todo))
      );

      setEditedTodo(null);
      setButtonEditTodo(false);
    }
  }

  function setCheck(td) {
    return (
      <div>
        <input
          type="checkbox"
          id={td.id} // Update name to id
          checked={td.completed}
          onChange={(event) => handleCheckChange(event, td)}
        ></input>
        <label htmlFor={td.id}> {td.title}</label>
        {/* Add an edit button */}
        <button onClick={() => handleEdit(td)}>Edit</button>
      </div>
    );
  }

  return (
    <>
      <h2>your todos:</h2>
      <div className="TodoDivi">
        <div>
          <label htmlFor="sort">Sort by:</label>
          <select
            name="sort"
            id="sort"
            value={sortOption}
            onChange={(e) => setSortOption(e.target.value)}
          >
            <option value="byId">Default</option>
            <option value="checked">Checked first</option>
            <option value="unchecked">Unchecked first</option>
            <option value="alphabet">Alphabetical</option>
            <option value="random">Random</option>
          </select>
        </div>

        <ul className="checkboxDiv">
          {todos.map((td) => (
            <li key={td.id}>{setCheck(td)}</li>
          ))}
        </ul>
      </div>
      <div className="crudDiv">
        <Popup trigger={buttonEditTodo} setTrigger={setButtonEditTodo}>
          <div className="popup-div">
            <h3>Edit Todo</h3>
            <h5>Enter new todo:</h5>
            <input
              type="text"
              placeholder="Todo..."
              value={editedTodo ? editedTodo.title : ""}
              onChange={(e) =>
                setEditedTodo({
                  ...editedTodo,
                  title: e.target.value,
                })
              }
            />
            <button onClick={saveEditedTodo}>Save</button>
            <button onClick={() => setEditedTodo(null)}>Cancel</button>
          </div>
        </Popup>
        <button
          className="crudBtn mainBtn"
          onClick={() => setButtonAddTodo(true)}
        >
          Add Todo
        </button>
        <Popup
          trigger={buttonAddTodo}
          setTrigger={setButtonAddTodo}
          setSave={saveNewTodo}
        >
          <div className="popup-div">
            {/* {console.log("add todo popup")} */}
            <h3>Add a new todo to your list</h3>
            <h5>enter new todo:</h5>
            <input id="newTodo" type="text" placeholder="Todo..."></input>
          </div>
        </Popup>
        <button
          className="crudBtn mainBtn"
          onClick={() => setButtonDeleteTodo(true)}
        >
          Delete todo
        </button>
        <Popup
          trigger={buttonDeleteTodo}
          setTrigger={setButtonDeleteTodo}
          // setSave={???}
        >
          <div className="popup-div">
            {/* {console.log("delete todo popup")} */}
            <h3>
              Press 'save' to delete this item from the todo list, otherwise
              press 'cencel'
            </h3>
          </div>
        </Popup>
      </div>
    </>
  );
}

export default Todos;
