export const ADD = 'ADD_TASK'
export const UPDATE = 'UPDATE_TASK'

export function addTaskAction(text) {
    return {
        type : ADD,
        text
    }
}

export function updateTaskAction(index) {
    return {
        type : UPDATE,
        index
    }
}