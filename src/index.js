import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Register from './register';
import Muro from './muro';
import Historial from './historial';
import Configuration from './configuration';
import Usuario from './usuario';
import Ayuda from './ayuda';
import Leasing1 from './leasing1';
import Leasing2 from './leasing2';
import Calcular1 from './calcular1';
import Calcular2 from './calcular2';
import CuadroFinal from './cuadrofinal';
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
      <Route path="/ayuda" element={<Ayuda />}/>
      <Route path="/leasing1" element={<Leasing1 />}/>
      <Route path="/leasing2" element={<Leasing2 />}/>
      <Route path="/calcular1" element={<Calcular1 />}/>
      <Route path="/calcular2" element={<Calcular2 />}/>
      <Route path="/cuadrofinal" element={<CuadroFinal />}/>
    </Routes>

  </BrowserRouter>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
