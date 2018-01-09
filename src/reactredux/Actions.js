export const INCREASE = 'increase'
export const DECREASE = 'decrease'

export function increaseAction(value) {
    return {
        type: INCREASE,
        value: value
    }
}

export function decreaseAction(value) {
    return {
        type: DECREASE,
        value: value
    }
}