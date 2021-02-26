import React from 'react';
import {
    BrowserRouter as Router,
    Route
  } from "react-router-dom"; 
import Header from '../components/Header/Header';
import Footer from '../components/Layouts/Footer';
import Home from './Home';

export default function Container() { 
    return(
        <Router>
            <Header/>
            <Route path="/" exact component={Home}></Route>
            <Footer/>
        </Router>
    )
}