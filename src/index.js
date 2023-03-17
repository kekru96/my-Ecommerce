import React from 'react';
import ReactDOM from 'react-dom/client';
import {Body} from './components/itemListContainer';
import { NavBar } from './components/navbar';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <NavBar />
    <Body greeting="Hola" nombre="kevin" edad="27"/>
  </React.StrictMode>
);


