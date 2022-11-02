import React, {useReducer} from 'react';
import st from "./TodoList.module.css"
import {TaskReducer} from "../../context/TaskReducer";
import {v1} from "uuid";

export const TodoList = () => {
    const [state,dispatch] = useReducer(TaskReducer,{["123"]: [
            {id: v1(), title: "HTML&CSS", isDone: true},
            {id: v1(), title: "JS", isDone: true},
            {id: v1(), title: "ReactJS", isDone: false}
        ]})
    return (
            <ul className={st.list}>
                {state["123"].map(el => <li key={el.id}>{el.title}</li>)}
            </ul>
    );
};
