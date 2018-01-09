import {createStore} from 'redux'
import todos from './reduces'

const initValues = {
    todos : []
};

const store = createStore(todos, initValues)

export default store