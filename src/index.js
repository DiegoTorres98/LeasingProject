import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Register from './register';
import Muro from './muro';
import Historial from './historial';
import Configuration from './configuration';
import Usuario from './usuario';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from "react-router-dom";
import {Routes} from "react-router-dom"
import {Route} from "react-router-dom"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes> 
      <Route path="/login" element={<App />}/>
      <Route path="*" element={<App />}/>
      <Route path="/register" element={<Register />}/>
      <Route path="/muro" element={<Muro />}/>
      <Route path="/historial" element={<Historial />}/>
      <Route path="/configuration" element={<Configuration />}/>
      <Route path="/usuario" element={<Usuario />}/>
    </Routes>

  </BrowserRouter>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
