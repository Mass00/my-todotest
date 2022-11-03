import React, {useState} from 'react';
import st from './TodoForm.module.css'
import {TodoList} from "./TodoList";
import {ButtonsGrp} from "./ButtonsGrp";
import {useDispatchContext, useStateContext} from "../../context/TodolistReducersProvider";
import {FilterType} from "../../context/TodoListReducer";
import {addTaskAC} from "../../context/TaskReducer";

type TodoFormPropsTypes = {
    todoId: string
    title: string
    filter: FilterType
}
export const TodoForm = (
    {
      todoId, title, filter
    }: TodoFormPropsTypes) => {
    const [state,setState] = useState<string>("")
    const {taskDisp} = useDispatchContext()
    const onKeyDownEnterHandler = (e:React.KeyboardEvent) => {
        if(e.key === 'Enter') {
            taskDisp(addTaskAC(todoId,state))
            setState("")
        }
    }
    return (
        <div className={st.container}>
            <div className={st.title}>
                <h2>{title}</h2>
            </div>
            <input
                type={'text'}
                value={state}
                onKeyDown={onKeyDownEnterHandler}
                onChange={(e:React.ChangeEvent<HTMLInputElement>)=>{setState(e.currentTarget.value)}}
            />
            <TodoList
                todoId={todoId}
                filter={filter}
            />
            <ButtonsGrp
                filter={filter}
                todoId={todoId}
            />
        </div>
    );
};
