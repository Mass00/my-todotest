import React, {createContext, useContext, useReducer} from 'react';
import {DefaultTaskReducerAction, TaskReducer, TaskReducerDefaultStateType} from "./TaskReducer";
import {v1} from "uuid";
import {DefaultActionType, DefaultStateType, TodoListReducer} from "./TodoListReducer";

const RootStateContextProvider = createContext<RootStateType | undefined>(undefined)
const RootDispatchContextProvider = createContext<RootDispatchType | undefined>(undefined)
type RootDispatchType = (action: DefaultTaskReducerAction | DefaultActionType) => void
type RootStateType = {
    task: TaskReducerDefaultStateType
    todo: DefaultStateType[]
}

const initTasksState:TaskReducerDefaultStateType = {
    ["todolistId1"]: [
        {id: v1(), title: "HTML&CSS", isDone: true},
        {id: v1(), title: "JS", isDone: true},
        {id: v1(), title: "ReactJS", isDone: false}
    ],
    ["todolistId2"]: [
        {id: v1(), title: "die Katze", isDone: true},
        {id: v1(), title: "der Hund", isDone: true},
        {id: v1(), title: "das Reh", isDone: false}
    ]

}
const initTodoState:DefaultStateType[] = [
    {id: "todolistId1", title: "What to learn", filter: "all"},
    {id: "todolistId2", title: "What to buy", filter: "all"}
]
export const TodolistReducersProvider = ({children}:any) => {
    const [task, taskDisptach] = useReducer(TaskReducer, initTasksState)
    const [todo, todoDispatch] = useReducer(TodoListReducer, initTodoState)
    return (
        <RootStateContextProvider.Provider value={{task: task, todo: todo}}>
            <RootDispatchContextProvider.Provider value={{task: taskDisptach,todo: todoDispatch}}>
                {children}
            </RootDispatchContextProvider.Provider>
        </RootStateContextProvider.Provider>
    );
};

