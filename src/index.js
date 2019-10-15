import React from 'react';
import ReactDOM from 'react-dom';
import NavigationBar from './components/navigationBar';
import Products from './components/products';
import Footer from './components/footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter } from 'react-router-dom';
import { Route } from 'react-router-dom';

ReactDOM.render(
    <BrowserRouter>
        <NavigationBar />
        <Products />
        <Footer />
    </BrowserRouter>,
    document.getElementById('root')
);