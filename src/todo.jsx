import { useState } from "react";

function todo() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");

  const handleInputChange = (e) => {
    setNewTask(e.target.value);
  };

  const addTask = () => {
    if (newTask.trim() !== "") {
      setTasks((t) => [...t, newTask]);
      setNewTask("");
    }
  };

  const deleteTask = (index) => {
    const updatedTask = tasks.filter((_, i) => i !== index);
    setTasks(updatedTask);
  };

  const moveUp = (index) => {
    if (index > 0) {
      const updatedTasks = [...tasks];
      [updatedTasks[index], updatedTasks[index - 1]] = [
        updatedTasks[index - 1],
        updatedTasks[index],
      ];
      setTasks(updatedTasks);
    }
  };

  const moveDown = (index) => {
    if (index < tasks.length - 1) {
      const updatedTasks = [...tasks];
      [updatedTasks[index], updatedTasks[index + 1]] = [
        updatedTasks[index + 1],
        updatedTasks[index],
      ];
      setTasks(updatedTasks);
    }
  };

  return (
    <>
      <div className="container">
        <h1>To Do List</h1>
        <div className="input-wrapper">
          <input
            type="text"
            placeholder="Add a task..."
            value={newTask}
            onChange={handleInputChange}
          />
          <button className="add-btn" onClick={addTask}>
            Add Task
          </button>
        </div>

        <ul>
          {tasks.map((task, index) => (
            <li key={index}>
              {task}
              <div>
                <button className="move-btn" onClick={() => moveUp(index)}>
                  ⬆
                </button>
                <button className="move-btn" onClick={() => moveDown(index)}>
                  ⬇
                </button>
                <button
                  className="delete-btn"
                  onClick={() => deleteTask(index)}
                >
                  ❌
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default todo;
