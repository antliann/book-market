import React from 'react';
import {useState, useEffect} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import GetBooks from "./App";


ReactDOM.render(
  <React.StrictMode>
    <div>
      <GetBooks/>
    </div>
  </React.StrictMode>,
  document.getElementById('root')
);