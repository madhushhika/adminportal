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
import EditProfile from './components/editProfile';
import Admin from './components/AdminPanel/admin';
import Side from './components/AdminPanel/SideNavPage';
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";
import categoryDetail from "./components/AdminPanel/Category"
import addProduct from "./components/AdminPanel/Product"
import modifyCategory from "./components/AdminPanel/Modifycategory"
import productDelete from "./components/AdminPanel/ProductDelete"
ReactDOM.render(
    <BrowserRouter>
    <Side/>
        <Route exact path="/deleteproduct" componenet={productDelete}/>
        <Route exact path="/modifycategory" component={modifyCategory} />
        <Route exact path="/dashboard" component={Admin} />
        <Route exact path="/addProduct" component={addProduct} />
        <Route exact path="/addcategory" component={categoryDetail} />
        <Route exact path="/products" component={Products} />
        <Route exact path="/softToys" component={SoftToys} />
        <Route exact path="/remoteControlCars" component={RemoteControlCars} />
        <Route exact path="/dolls" component={Dolls} />
        <Route exact path="/actionFigures" component={ActionFigures} />
        <Route exact path="/editProfile" component={EditProfile} />
        <Route exact path="/admin" component={Admin} />
       
    </BrowserRouter>,
    document.getElementById('root')
);