import React, {useMemo, useReducer} from 'react';
import st from "./TodoList.module.css"
import {useStateContext} from "../../context/TodolistReducersProvider";
import {FilterType} from "../../context/TodoListReducer";

type TodoListPropsType = {
    todoId: string
    filter: FilterType
}
export const TodoList = ({todoId, filter}: TodoListPropsType) => {
    const {task} = useStateContext()
    const allTasks = task[todoId]
    let filtredTasks = allTasks
    if(filter === "active") filtredTasks = task[todoId].filter(el => !el.isDone)
    if(filter === "complete") filtredTasks = task[todoId].filter(el => el.isDone)
    return (
        <ul className={st.list}>
            {filtredTasks.map(el => <li key={el.id}>{el.title}</li>)}
        </ul>
    );
};
