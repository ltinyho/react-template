// app.js
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import App from './App.jsx';
import study from 'kyy-services/src/studyService';

const app = document.getElementById('app');
ReactDOM.render(
  <Router>
    <App />
  </Router>
  , app,
);
module.hot.accept();
