export type FilterType =  "all" | "active" | "complete"
export type DefaultStateType = {
    id: string
    title: string
    filter: FilterType
}
export type DefaultActionType = changeTitleACType | changeFilterACType
export const TodoListReducer = (state: DefaultStateType[], action: DefaultActionType) => {
    switch (action.type){
        case "CHANGE-TITLE": {
            return state.map(todo => todo.id === action.payload.todoListId ? {...todo,title: action.payload.title} : todo)
        }
        case "CHANGE-FILTER": {
            return state.map(todo => todo.id === action.payload.todoListId ? {...todo,filter: action.payload.filter} : todo)
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


