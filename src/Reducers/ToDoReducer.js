
import {DELETE, ADD_TODO, COMPLETE, EDIT } from '../Actions/types'
import uuid from 'uuid'


const ToDoReducer = (state = [{input: "hello", complete: false, id: uuid(), editing: false}, {input: "hi", complete: false, id: uuid(), editing: false}], action) => {
    switch (action.type) {
        case ADD_TODO:
            return state.concat(action.payload)

        case DELETE:
            return state.filter(el => el.id !== action.payload)
        case COMPLETE:
            return state.map(el => el.id === action.payload ? {...el, complete : !el.complete } : el)
        
        case EDIT:
            return state.map(el => el.id === action.payload.id ? {...el, editing: !el.editing, input: action.payload.input} : el)
        
        default:
            return state
    }
}
export default ToDoReducer