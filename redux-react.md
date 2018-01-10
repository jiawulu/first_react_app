## redux-react

### actions

1. 定义类型
2. 定义简单的action构建方法

	    export const DECREASE = 'decrease'
	
	    export function increaseAction(value) {
	        return {
	            type: INCREASE,
	            value: value
	        }
	    }

### reduces

提供 function(state,action) -> newState 的纯函数 api

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


### store

使用redux创建store， store 有 subscribe， getState 等api

	import reduces from "./Redues"
	import {createStore} from "redux"
	
	export default createStore(reduces,{
	    value : 10,
	    caption : 'ljw'
	})


### component(react, redux-react)


	import React, { PropTypes } from 'react';
	import {connect} from 'react-redux';
	
	const buttonStyle = {
	    margin: '10px'
	};
	
	//会自动注入，从下面的2个map方法注入
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
		
	//title 是 ownProps
	function mapStateToProps(state, ownProps) {
		return {}
	}
	
	function mapDispatchToProps(dispatch, ownProps) {
	   dispatch(action);
	}
	
	export default connect(mapStateToProps, mapDispatchToProps)(Counter);
	


### index

	import {Provider} from 'react-redux';
	import Counter from "./reactredux/component/Counter";
	import store from "./reactredux/Store"
	
	ReactDOM.render(
	    <Provider store={store}>
	        <Counter title={"helloworld"}/>
	    </Provider>,document.getElementById('root'))