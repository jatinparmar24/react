import { useState, useEffect } from 'react';
import './App.css';

function Todolist() {
  const [taskInput, setTaskInput] = useState('');     // store values that we input
  const [category, setCategory] = useState('Work');   // store category that we input
  const [tasks, setTasks] = useState([]);             // store every task as an object that we store

  // Load tasks from localStorage on mount
  // Fallback to an empty array if there's no data in localStorage
  useEffect(() => {
    try {
    const stored = JSON.parse(localStorage.getItem('tasks')) || []; // Fallback to an empty array if there's no data in localStorage
    setTasks(stored);
  } catch (err) {
    console.error('Failed to parse tasks from localStorage:', err);
    setTasks([]);
  }
  }, []);


  // Save tasks to localStorage when tasks update
  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  // Handle task input change
  function handleInputChange(e) {
    setTaskInput(e.target.value);
  }

  // Handle category change
  function handleCategoryChange(e) {
    setCategory(e.target.value);
  }

  // Add new task
  function addToList(e) {
    e.preventDefault();
    if (taskInput.trim() === '') return;    // checks empty input or not

    const newTask = {
      id: Date.now(),           // Unique ID for the task
      text: taskInput,          // The task text from input
      category: category,       // Category selected (Work, Personal, etc.)
      deleted: false            // Flag to show whether task is marked deleted
    };


    setTasks([...tasks, newTask]); // Add new task to the list
    setTaskInput('');              // Clear input box
    setCategory('Work');           // Reset category to default

  }

  // Mark task as deleted
  function deleteTask(id) {
    const updated = tasks.map(task =>
      task.id === id ? { ...task, deleted: true } : task
    );
    setTasks(updated);
  }

  return (
    <section className="section">
      <h1>📝 To Do List</h1>

      <form onSubmit={addToList}>
        <input
          type="text"
          placeholder="Enter task"
          value={taskInput}
          onChange={handleInputChange}
        />

        <select value={category} onChange={handleCategoryChange}>
          <option value="Work">Work</option>
          <option value="Personal">Personal</option>
          <option value="Urgent">Urgent</option>
        </select>

        <button type="submit">✅ Confirm Task</button>
      </form>

      <div className="task-list">
        <h2>📋 Your Tasks:</h2>
        {tasks.length === 0 ? (
          <p>No tasks yet.</p>
        ) : (
          <ul>
            {tasks.map((task) => (
              <li key={task.id} className={task.deleted ? 'deleted' : ''}>
                <strong>{task.text}</strong> <em>({task.category})</em>
                {!task.deleted && (
                  <button
                    className="delete-btn"
                    onClick={() => deleteTask(task.id)}
                  >
                    ❌
                  </button>
                )}
              </li>
            ))}
          </ul>
        )}
      </div>
    </section>
  );
}

export default Todolist;
