import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import NavbarTop from './NavbarTop';
import * as serviceWorker from './serviceWorker';
// import $ from 'jquery';
// import Popper from 'popper.js';
import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(
  // <React.StrictMode>
    <NavbarTop />,
  // </React.StrictMode>,
  document.getElementById('navbar_attop_zero_row')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
