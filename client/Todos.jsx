import React, { useState, useEffect } from "react";

function Todos() {
  const [todos, setTodos] = useState([]);
  const [sortOption, setSortOption] = useState("");

  useEffect(() => {
    let user = JSON.parse(localStorage.getItem("ourUser"));
    let ttt = JSON.parse(localStorage.getItem("todos"));
    if (ttt) {
      setTodos(ttt);
    } else {
      fetch(`http://localhost:3000/todos/?userId=${user.id}`)
        .then((response) => response.json())
        .then((data) => {
          setTodos(data);
          localStorage.setItem("todos", JSON.stringify(data));
        });
    }
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
        <label htmlFor={td.id}>{td.title}</label>
      </div>
    );
  }

  return (
    <>
      <h2>your todos:</h2>

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
    </>
  );
}

export default Todos;
