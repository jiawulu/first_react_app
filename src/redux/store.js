import {createStore} from 'redux'
import reduce from './reduces'

const store = createStore(reduce, {
    todos : []
})

export default store