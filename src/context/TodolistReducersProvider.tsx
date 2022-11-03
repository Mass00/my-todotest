import React, {createContext, useContext, useReducer} from 'react';
import {DefaultTaskReducerAction, TaskReducer, TaskReducerDefaultStateType} from "./TaskReducer";
import {v1} from "uuid";
import {DefaultActionType, DefaultStateType, TodoListReducer} from "./TodoListReducer";

const RootStateContextProvider = createContext<RootStateType | undefined>(undefined)
const RootDispatchContextProvider = createContext<RootDispatchType | undefined>(undefined)
type RootDispatchType = {
    taskDisp: (action: DefaultTaskReducerAction ) => void
    todoDisp: (action: DefaultActionType) => void
}
type RootStateType = {
    task: TaskReducerDefaultStateType
    todo: DefaultStateType[]
}
type ProviderPropsType = {
    children: React.ReactNode
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
    {id: "todolistId1", title: "What to learn", filter: "complete"},
    {id: "todolistId2", title: "What to buy", filter: "all"}
]
export const TodolistReducersProvider = ({children}:ProviderPropsType) => {
    const [task, taskDispatch] = useReducer(TaskReducer, initTasksState)
    const [todo, todoDispatch] = useReducer(TodoListReducer, initTodoState)
    return (
        <RootStateContextProvider.Provider value={
            {
                task: task,
                todo: todo
            }}>
            <RootDispatchContextProvider.Provider value={
                {
                    taskDisp: taskDispatch,
                    todoDisp: todoDispatch
                }}>
                {children}
            </RootDispatchContextProvider.Provider>
        </RootStateContextProvider.Provider>
    );
};

export function useStateContext(){
    const context = useContext(RootStateContextProvider)
    if (context === undefined) {
        throw new Error('useStateContext must be used within a CountProvider')
    }
    return context
}
export function useDispatchContext(){
    const context = useContext(RootDispatchContextProvider)
    if (context === undefined) {
        throw new Error('useDispatchContext must be used within a CountProvider')
    }
    return context
}
