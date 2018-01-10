import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
// import ClickCounter from './ClickCounter';
// import ClickCounterGroup from  './ClickCounterGroup'


/** react-redux  */
import {Provider} from 'react-redux';
import Counter from "./reactredux/component/Counter";
import store from "./reactredux/Store"
ReactDOM.render(
    <Provider store={store}>
        <Counter title={"helloworld"}/>
    </Provider>,document.getElementById('root'))
/** react-redux  */

// ReactDOM.render(<App />, document.getElementById('root'));
// ReactDOM.render(<Counter count={1} />, document.getElementById('root'));


// import registerServiceWorker from './registerServiceWorker';
// registerServiceWorker();


/** dva */
// import dva, { connect } from 'dva';
//
// // 1. Initialize
// const app = dva();
//
// // 2. Model
// app.model({
//     namespace: 'count',
//     state: 0,
//     reducers: {
//         add  (count) { return count + 1 },
//         minus(count) { return count - 1 },
//     },
// });
//
// class TestError extends React.Component {
//     componentDidCatch(e) {
//         alert(e.message);
//     }
//     componentDidMount() {
//         // throw new Error('a');
//     }
//     render() {
//         return <div>TestError</div>
//     }
// }
//
// // 3. View
// const App = connect(({ count }) => ({
//     count
// }))(function(props) {
//     return (
//         <div>
//             <TestError />
//             <h2>{ props.count }</h2>
//             <button key="add" onClick={() => { props.dispatch({type: 'count/add'})}}>+</button>
//             <button key="minus" onClick={() => { props.dispatch({type: 'count/minus'})}}>-</button>
//         </div>
//     );
// });
//
// // 4. Router
// app.router(() => <App />);
//
// // 5. Start
// app.start('#root');

/** dva */
