import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import ClickCounter from './ClickCounter';
import registerServiceWorker from './registerServiceWorker';
import ClickCounterGroup from  './ClickCounterGroup'

// ReactDOM.render(<App />, document.getElementById('root'));
ReactDOM.render(<ClickCounterGroup />, document.getElementById('root'));
registerServiceWorker();
