import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Create from './components/create'
import Login from './components/login'
import Register from './components/register'
import Dashboard from './components/dashboard'

import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
  <BrowserRouter>
  <Routes>
  <Route  path="/" element={<App />} />
     <Route path='create' element={<Create/>} />
      <Route path='dashboard' element={<Dashboard/>} />
      <Route path='login' element={<Login/>} />
      <Route path='register' element={<Register/>} />
</Routes>
  </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
