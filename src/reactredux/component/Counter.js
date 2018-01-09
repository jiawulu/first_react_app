import React, { PropTypes } from 'react';
import * as Actions from '../Actions.js';
import {connect} from 'react-redux';

const buttonStyle = {
    margin: '10px'
};

function Counter({  onIncrement, onDecrement,caption, value , title}) {
    console.log("Counter", caption, value)
    return (
        <div>
            <button style={buttonStyle} onClick={onIncrement}>+</button>
            <button style={buttonStyle} onClick={onDecrement}>-</button>
            <span> {title} {caption} count: {value}</span>
        </div>
    );
}

// Counter.propTypes = {
//     // caption: PropTypes.string.isRequired,
//     onIncrement: PropTypes.func.isRequired,
//     onDecrement: PropTypes.func.isRequired,
//     value: PropTypes.number.isRequired
// };

//title 是 ownProps
function mapStateToProps(state, ownProps) {
    console.log("mapStateToProps",ownProps)
    return {
        value: state.value,
        caption: state.caption
    }
}

function mapDispatchToProps(dispatch, ownProps) {
    console.log("mapDispatchToProps",ownProps)
    return {
        onIncrement: () => {
            let action = Actions.increaseAction(1)
            console.log(action)
            dispatch(action);
        },
        onDecrement: () => {
            dispatch(Actions.decreaseAction(1));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);

