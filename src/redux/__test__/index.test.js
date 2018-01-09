import store from '../store'
import {addTaskAction, updateTaskAction} from '../actions'

it("redux", () => {

    console.log(store.getState())

    let unsbus = store.subscribe(() => {
        console.log(store.getState())
    })

    store.dispatch(addTaskAction('test'))
    store.dispatch(addTaskAction('test1'))
    store.dispatch(addTaskAction('test2'))
    store.dispatch(addTaskAction('test3'))

    store.dispatch(updateTaskAction(0))
    store.dispatch(updateTaskAction(1))


    // store.unsubscribe(unsbus)

    console.log(1223)
})