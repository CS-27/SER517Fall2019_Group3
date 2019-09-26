import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Contact from './Components/Contact';
import App from './App';
import * as serviceWorker from './serviceWorker';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";


ReactDOM.render(<Contact />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
