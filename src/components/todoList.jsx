import React from 'react';

function TodoList({ todos }) {
  if (!todos.length) {
    return <p>Loading...</p>;
  }

  return (
    <ul>
      {todos.map((todo) => (
        <li key={todo.id}>
          <strong>{todo.title}</strong> 
        </li>
      ))}
    </ul>
  );
}

export default TodoList;
