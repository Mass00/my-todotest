import {v1} from "uuid";
import {addTodoACType} from "./TodoListReducer";

type TaskType = {
    id: string
    title: string
    isDone: boolean
}
export type TaskReducerDefaultStateType = {
    [key: string]: TaskType[] | []
}
export type DefaultTaskReducerAction = addTaskACType | rmTaskACType | addTodoACType
export const TaskReducer = (state: TaskReducerDefaultStateType , action: DefaultTaskReducerAction) => {
    switch (action.type){
        case "ADD-TASK": {
            debugger
            return {...state,[action.payload.todoId]: [...state[action.payload.todoId],{id: v1(),title: action.payload.title,isDone: false}]}
        }
        case "REMOVE-TASK": {
            return {...state,[action.payload.todoId]: state[action.payload.todoId].filter(task => task.id !== action.payload.taskId)}
        }
        case "ADD-TODO": {
            const stateCopy = {...state};
            stateCopy[action.payload.id] = [];
            return stateCopy;
        }
        default: return state;
    }
}
type addTaskACType = ReturnType<typeof addTaskAC>
export const addTaskAC = (todoId: string, title: string) =>  {return { type: "ADD-TASK", payload: {todoId, title} } as const }
type rmTaskACType = ReturnType<typeof rmTaskAC>
export const rmTaskAC = (todoId: string,taskId: string) =>  {return { type: "REMOVE-TASK", payload: {todoId,taskId} } as const }
