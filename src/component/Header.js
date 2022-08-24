import React from "react";

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Logo from "./assest/logo.jpg"
import axios from "axios";
import Search from "./Search"


import "./Header.css"

class Header extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            userInput: "",
            data: []
        }
    }
    updateUserInput = (e) => {
        this.setState({
            userInput: e.target.value
        })
    }


    handleSubmit = async (e) => {
        e.preventDefault();
        console.log("Form is Submitted");
        const search_data = await axios.get(`https://movie-adarbeh.herokuapp.com/search?query=${this.state.userInput}`)
        this.setState({
            data: search_data.data
        })
        console.log(search_data.data)
    }




    render() {
        return (


            <>
                <Navbar collapseOnSelect expand="lg" variant="dark" className="header-nav">
                    <Container>
                        <Navbar.Brand href="/"><img src={Logo} style={{ width: "2rem", borderRadius: "50%", marginRight: "10%" }}></img>popcorn</Navbar.Brand>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse id="responsive-navbar-nav">
                            <Nav className="me-auto">
                                <Nav.Link href="/">HOME</Nav.Link>
                                <Nav.Link href="/CONTACT">CONTACT </Nav.Link>

                                <NavDropdown title="GENRES" id="collasible-nav-dropdown">
                                    <NavDropdown.Item href="#action/3.1">Accion</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.2">Drama</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.3">Comedia</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.4">Terror</NavDropdown.Item>
                                </NavDropdown>
                            </Nav>
                            <Nav>
                                <div className="div-form">
                                    <Form className="d-flex" onSubmit={this.handleSubmit}>
                                        <Form.Control
                                            type="search"
                                            placeholder="Search"
                                            className="me-2"
                                            aria-label="search"
                                            onChange={this.updateUserInput}
                                        />
                                        <Button variant="primary" type="submit" className="header_button">
                                            Submit
                                        </Button>
                                    </Form>
                                </div>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>

                <Search
                    data={this.state.data}
                />
            </>

        );



    }
}

export default Header;
