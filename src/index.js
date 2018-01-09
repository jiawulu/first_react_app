import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
// import ClickCounter from './ClickCounter';
import registerServiceWorker from './registerServiceWorker';
// import ClickCounterGroup from  './ClickCounterGroup'
import {Provider} from 'react-redux';
import Counter from "./reactredux/component/Counter";
import store from "./reactredux/Store"

ReactDOM.render(
    <Provider store={store}>
        <Counter title={"helloworld"}/>
    </Provider>,document.getElementById('root'))

// ReactDOM.render(<App />, document.getElementById('root'));
// ReactDOM.render(<Counter count={1} />, document.getElementById('root'));
registerServiceWorker();
