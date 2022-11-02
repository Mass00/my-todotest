import React from 'react';
import st from './TodoForm.module.css'
import {TodoList} from "./TodoList";
import {ButtonsGrp} from "./ButtonsGrp";

export const TodoForm = () => {
    return (
        <div className={st.container}>
            <div className={st.title}>
                <h2>TITLE</h2>
            </div>

            <input type={'text'}/>

            <TodoList/>
            <ButtonsGrp/>
        </div>
    );
};
