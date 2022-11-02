import React from 'react';
import st from './TodoForm.module.css'
import {TodoList} from "./TodoList";
import {ButtonsGrp} from "./ButtonsGrp";
import {useStateContext} from "../../context/TodolistReducersProvider";
import {FilterType} from "../../context/TodoListReducer";

type TodoFormPropsTypes = {
    todoId: string
    title: string
    filter: FilterType
}
export const TodoForm = (
    {
      todoId, title, filter
    }: TodoFormPropsTypes) => {

    return (
        <div className={st.container}>
            <div className={st.title}>
                <h2>{title}</h2>
            </div>
            <input type={'text'}/>
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
