import {
    ADD,
    UPDATE
} from './actions'
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

function filter(state = 'SHOW_ALL', action) {
    switch (action.type) {
        case 'SET_VISIBILITY_FILTER':
            return action.filter
        default:
            return state
    }
}

// export default todos;
// const todoApp = combineReducers({
//     todos,
//     filter
// })
// export default todoApp;


// function todoApp(state = {}, action) {
//     return {
//         todos: todos(state.todos, action),
//         filter: filter(state.filter, action)
//     };
// }
// //



export default function todoApp(state = {}, action) {
    return {
        filter: filter(state.filter, action),
        todos: todos(state.todos, action)
    }
}

