import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import {TodoForm} from "./componets/Todo/TodoForm";
import {useDispatchContext, useStateContext} from "./context/TodolistReducersProvider";
import {addTodoAC} from "./context/TodoListReducer";

function App() {
    const {todo,task} = useStateContext()
    console.log(todo)
    console.log(task)
    const {todoDisp,taskDisp} = useDispatchContext()
    const [state,setState] = useState<string>("")
    const onClickAddTodoHandler = () => {
        todoDisp(addTodoAC(state))
        taskDisp(addTodoAC(state))
    }
    return (
        <>
            <div>
                <input
                    type={"text"}
                    value={state}
                    onChange={(e:React.ChangeEvent<HTMLInputElement>)=>setState(e.currentTarget.value)}
                />
                <button onClick={onClickAddTodoHandler}>Add</button>
            </div>
            <div className="App">
                {todo.map(todo => <TodoForm
                    key={todo.id}
                    todoId={todo.id}
                    title={todo.title}
                    filter={todo.filter}
                />)}
            </div>
        </>
    );
}

export default App;
