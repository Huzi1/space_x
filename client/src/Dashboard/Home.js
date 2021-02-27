import React, { useState } from 'react';
// import { Navbar, Nav, NavDropdown, Form, FormControl, Button } from 'react-bootstrap';
import Hanger from '../SpaceshipsComp/Hanger'
import { Col, Row, Container } from 'react-bootstrap';
const Home = () => {
    return (
        <>
            {/* <Container>
                <Row>

                </Row>
                <Row>
                    <Col >
                        <Hanger />
                    </Col>

                </Row>
                <Row>

                </Row>
            </Container> */}
            <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "inherit" }}>
                <Hanger />
            </div>

        </>
    )
}
export default Home;