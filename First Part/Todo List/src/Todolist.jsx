// import React, { useState } from 'react';
// import React from 'react';

// const Todolist = ({ todos, toggleComplete, removeTodo }) => {
//     return (
//         <ul>
//             {todos.map((todo) => (
//                 <li key={todo.id}>
//                     <input type="checkbox" checked={todo.completed} onChange={() => toggleComplete(todo.id)} />
//                     <span style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>{todo.text}</span>
//                     <button onClick={() => removeTodo(todo.id)}>Delete</button>
//                 </li>
//             ))}
//         </ul>
//     );
// };

// export default Todolist;