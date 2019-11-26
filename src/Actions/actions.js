import {ADD_TODO , DELETE, COMPLETE, EDIT} from './types'

export const addTodO = (newToDo) =>{
    return {
        type: ADD_TODO,
        payload: newToDo
    }
}
export const Delete = (ID) =>{
    return {
        type: DELETE,
        payload: ID

        
    }

}
export const Complete = (ID) => {
    return {
        type: COMPLETE,
        payload: ID
    }
}
export const Edit = (editedToDo) => {
    return{
        type: EDIT,
        payload: editedToDo
    }
}