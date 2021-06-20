import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import App from "./components/App";
import Footer from "./components/Footer";
import {BrowserRouter as Router} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css'


ReactDOM.render(
  <Router>
  <App/>  
  <Footer/>
  </Router>,
  document.getElementById('app')
);
