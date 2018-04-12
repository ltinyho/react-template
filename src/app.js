//app.js
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';

const app = document.getElementById('app');
ReactDOM.render(<App/>, app);
module.hot.accept();