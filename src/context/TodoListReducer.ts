export type FilterType =  "all" | "active" | "complete"
export type DefaultStateType = {
    id: string
    title: string
    filter: FilterType
}
export type DefaultActionType = changeTitleACType
export const TodoListReducer = (state: DefaultStateType[], action: DefaultActionType) => {
    switch (action.type){
        case "CHANGE-TITLE": {
            return state.map(todo => todo.id === action.payload.todoListId ? {...todo,title: action.payload.title} : todo)
        }
        default: return state;
    }
}

type changeTitleACType = ReturnType<typeof changeTitleAC>
export const changeTitleAC = (todoListId: string, title: string) => {
    return {type: 'CHANGE-TITLE', payload: {todoListId,title}} as const
}

