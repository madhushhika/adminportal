import React, { Component } from "react";
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import FormControl from 'react-bootstrap/FormControl';
import LogoImage from "../../assets/images/logo.png";
import { FaSearch } from 'react-icons/fa';
import { FaShoppingCart } from 'react-icons/fa';

class SideNavPage extends Component {
    state = {
        searchText:'',
    };

    search () {
        var searchTextVal = this.state.searchText
        this.props.history.push('/products/:searchTextVal');
    }

    handleChange = event => {
        this.setState({ searchText: event.target.value });
      };
componentDidMount(){
localStorage.clear(); 
}
    render() {
        return (
            <Navbar sticky="top" bg="dark" variant="dark" expand="lg">
                <Navbar.Brand href="#home">
                    <img
                        alt="Toys Shop"
                        src={LogoImage}
                        width="100"
                        className="d-inline-block align-top"
                     />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">deleteproduct
                     
                        <Nav.Link  href="/dashboard">Dashboard</Nav.Link>
                        <Nav.Link href="/addProduct">Add Product</Nav.Link>
                        <Nav.Link  href="/deleteproduct">Delete Product</Nav.Link>
                        <Nav.Link href="/Modifycategory">Modify Categories</Nav.Link>
                        <Nav.Link href="/addcategory">Delete Categories</Nav.Link>
                        <Nav.Link href="#myAccount">Edit User</Nav.Link> 
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        );
    }
}


    export default SideNavPage;