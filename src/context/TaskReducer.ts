import {v1} from "uuid";

type TaskType = {
    id: string
    title: string
    isDone: boolean
}
export type TaskReducerDefaultStateType = {
    [key: string]: TaskType[]
}
export type DefaultTaskReducerAction = addTaskACType
export const TaskReducer = (state: TaskReducerDefaultStateType , action: DefaultTaskReducerAction) => {
    switch (action.type){
        case "ADD-TASK": {
            return {...state,["123"]: [{id: v1(),title: action.payload.title,isDone: false}]}
        }
        default: return state;
    }
}
type addTaskACType = ReturnType<typeof addTaskAC>
export const addTaskAC = (taskId: string, title: string) =>  {return { type: "ADD-TASK", payload: {taskId, title} } as const }
