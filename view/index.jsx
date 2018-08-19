import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './components/App';

console.log("hurray");

ReactDOM.render(
    <Router basename={window.routePrefix}>
        <App />
    </Router>,
    document.getElementById('root'),
);