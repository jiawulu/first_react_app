import {
    ADD,
    UPDATE
} from './actions';

import {combineReducers} from 'redux'

function todos(state = [], action) {
    switch(action.type){
        case ADD :
            return [...state,{
                text: action.text,
                completed : false
            }]
        case UPDATE:
            return state.map((todo, index) => {
                if (index == action.index){
                    return Object.assign({}, todo, {
                        completed : true
                    })
                }
                return todo;
            })
        default:
            state;
    }
}

const todoApp = combineReducers({
    todos
})

export default todoApp;

