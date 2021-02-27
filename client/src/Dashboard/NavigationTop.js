import React, { useState } from 'react';
import { Navbar, Nav, NavDropdown, Form, FormControl, Button } from 'react-bootstrap';


const NavigationTop = () => {
    return (
        <>
            <Navbar bg="light" expand="lg" fixed="top">
                <Navbar.Brand href="/home">Dashboard</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href="/Locations">Spaceports</Nav.Link>
                        <Nav.Link href="/Travel">Travel</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </>
    )
}
export default NavigationTop;