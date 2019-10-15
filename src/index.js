import React from 'react';
import ReactDOM from 'react-dom';
import NavigationBar from './components/navigationBar';
import Products from './components/products';
import Footer from './components/footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter } from 'react-router-dom';
import { Route } from 'react-router-dom';
import SoftToys from './components/NavBarItems/softToys';
import RemoteControlCars from './components/NavBarItems/remoteControlCars';
import Dolls from './components/NavBarItems/dolls';
import ActionFigures from './components/NavBarItems/actionFigures';

ReactDOM.render(
    <BrowserRouter>
        <NavigationBar />
        <Route exact path="/products" component={Products} />
        <Route exact path="/softToys" component={SoftToys} />
        <Route exact path="/remoteControlCars" component={RemoteControlCars} />
        <Route exact path="/dolls" component={Dolls} />
        <Route exact path="/actionFigures" component={ActionFigures} />
        <Footer />
    </BrowserRouter>,
    document.getElementById('root')
);