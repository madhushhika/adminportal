import React, { Component } from "react";
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import FormControl from 'react-bootstrap/FormControl';
import LogoImage from "../assets/images/logo.png";
import { FaSearch } from 'react-icons/fa';
import { FaShoppingCart } from 'react-icons/fa';

class NavigationBar extends Component {
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
                    <Nav className="mr-auto">
                        <Nav.Link href="#newToys">New Toys</Nav.Link>
                        <NavDropdown title="Categories" id="basic-nav-dropdown">
                            <NavDropdown.Item href="/products">All Toys</NavDropdown.Item>
                            <NavDropdown.Item href="/softToys">Soft Toys</NavDropdown.Item>
                            <NavDropdown.Item href="/remoteControlCars">Remote Control Cars</NavDropdown.Item>
                            <NavDropdown.Item href="/dolls">Dolls</NavDropdown.Item>
                            <NavDropdown.Item href="/actionFigures">Action Figures</NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link href="#myAccount">My Account</Nav.Link>
                        <NavDropdown title="My Account" id="basic-nav-dropdown">
                            <NavDropdown.Item href="/editProfile">Edit Profile</NavDropdown.Item>
                            <NavDropdown.Item href="/editProfile">My Orders</NavDropdown.Item>
                            <NavDropdown.Item href="/softToys">Logout</NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link href="#cart"><FaShoppingCart /></Nav.Link>
                        
                    </Nav>
                    <Form inline>
                        <FormControl type="text" placeholder="Search By Name" className="mr-sm-2" value={this.state.searchText} onChange={this.handleChange}/>
                        <Button variant="outline-light" onClick={this.search}><FaSearch /></Button>
                    </Form>
                </Navbar.Collapse>
            </Navbar>
        );
    }
}

export default NavigationBar;