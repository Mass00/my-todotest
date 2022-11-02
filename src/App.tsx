import React from 'react';
import logo from './logo.svg';
import './App.css';
import {TodoForm} from "./componets/Todo/TodoForm";
import {useStateContext} from "./context/TodolistReducersProvider";

function App() {
    const {todo} = useStateContext()
  return (
    <div className="App">
        {todo.map(todo => <TodoForm
            key={todo.id}
            todoId={todo.id}
            title={todo.title}
            filter={todo.filter}
        />)}
    </div>
  );
}

export default App;
