import {v1} from "uuid";

export type FilterType =  "all" | "active" | "complete"
export type DefaultStateType = {
    id: string
    title: string
    filter: FilterType
}
export type DefaultActionType = changeTitleACType | changeFilterACType | addTodoACType
export const TodoListReducer = (state: DefaultStateType[], action: DefaultActionType) => {
    switch (action.type){
        case "CHANGE-TITLE": {
            return state.map(todo => todo.id === action.payload.todoListId ? {...todo,title: action.payload.title} : todo)
        }
        case "CHANGE-FILTER": {
            return state.map(todo => todo.id === action.payload.todoListId ? {...todo,filter: action.payload.filter} : todo)
        }
        case "ADD-TODO": {
            let tempTodo:DefaultStateType  = {...action.payload,filter: "all"}
            return [...state,tempTodo]
        }
        default: return state;
    }
}

type changeTitleACType = ReturnType<typeof changeTitleAC>
export const changeTitleAC = (todoListId: string, title: string) => {
    return {type: 'CHANGE-TITLE', payload: {todoListId,title}} as const
}
type changeFilterACType = ReturnType<typeof changeFilterAC>
export const changeFilterAC = (todoListId: string, filter: FilterType) => {
    return {type: 'CHANGE-FILTER', payload: {todoListId,filter}} as const
}
export type addTodoACType = ReturnType<typeof addTodoAC>
export const addTodoAC = (title: string) => {
    return {type: 'ADD-TODO', payload: {id: v1(), title}} as const
}


