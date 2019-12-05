import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
<<<<<<< HEAD
import Contact from './components/Contact';

import App from './App';
=======
>>>>>>> master
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Toolbar from "./components/Toolbar/Toolbar";
import { BrowserRouter as Router } from 'react-router-dom';

ReactDOM.render(
    <Router>
        <Toolbar/>
    </Router>,
    document.getElementById('root')
);

serviceWorker.unregister();
