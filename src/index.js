import React from 'react';
import ReactDOM from 'react-dom';
import NavigationBar from './components/navigationBar';
import Products from './components/products';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter } from 'react-router-dom';
import { Route } from 'react-router-dom';

ReactDOM.render(
    <BrowserRouter>
        <NavigationBar />
        <Products />
    </BrowserRouter>,
    document.getElementById('root')
);
