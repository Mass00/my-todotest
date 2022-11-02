import React, {memo} from 'react';
import st from './ButtonsGrp.module.css'
import {changeFilterAC, FilterType} from "../../context/TodoListReducer";
import {useDispatchContext} from "../../context/TodolistReducersProvider";

type ButtonsGrpPropsType = {
    filter: FilterType
    todoId: string
}
export const ButtonsGrp = ({filter,todoId}: ButtonsGrpPropsType) => {
    const {todo} = useDispatchContext()
    const onClickChangeFilterHandler = (filter: FilterType) => {
        todo(changeFilterAC(todoId,filter))
    }
    return (
        <div className={st.container}>
            <button
                style={{color: filter === "all" ? 'red' : 'black'}}
                onClick={() => onClickChangeFilterHandler('all')}
            >All</button>
            <button
                style={{color: filter === "active" ? 'red' : 'black'}}
                onClick={() => onClickChangeFilterHandler('active')}
            >Active</button>
            <button
                style={{color: filter === "complete" ? 'red' : 'black'}}
                onClick={() => onClickChangeFilterHandler('complete')}
            >Complete</button>
        </div>
    );
}
