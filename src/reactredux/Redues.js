import * as Actions from './Actions'

export default (state, action) => {

    console.log("action", action)
    console.log("state", state)

    switch (action.type) {
        case Actions.INCREASE :
            let value = Object.assign({}, state, {
                value: state.value + action.value
            });
            console.log("reduces", value)
            return value
        case Actions.DECREASE :
            return Object.assign({}, state, {
                value: state.value - action.value
            })
        default:
            return state

    }

}


