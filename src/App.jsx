import React, { useState, useEffect } from 'react';
import TodoList from './components/todoList';

function App() {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState('');

  useEffect(() => {
    async function fetchData() {
      const response = await fetch('https://jsonplaceholder.typicode.com/todos');
      const data = await response.json();
      setTodos(data.slice(0, 5));
    }
    fetchData();
  }, []);

  return (
    <div className="App">
      <h1 className="header">My todo list</h1>
      <input
        type="text"
        value={newTodo} 
        onChange={(e) => setNewTodo(e.target.value)}
        placeholder="Add new todo"
      />
      <button onClick={() => {
        setTodos([...todos, { title: newTodo, completed: false }]);
        setNewTodo('');
      }}>
        Add new
      </button>
      <TodoList todos={todos} />
    </div>
  );
}

export default App;
