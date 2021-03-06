import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';
//import Welcome from './Welcome';
import 'bootstrap/dist/css/bootstrap.min.css';
import * as serviceWorker from './serviceWorker';
//import NameCard from './Components/NameCard';
//import CssTest from './Components/CssTest.js';
import TodoList from './Components/TodoList';

ReactDOM.render(<TodoList />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
