import React from 'react';
import { Button, Container, Form, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import brandImg from "../../img/logo.png";
const Header = () => {
    return (
        <div>
            <Navbar bg="transparent" expand="md" className='container-lg'>
                <Container fluid className=''>
                    <Link to='/' className=''>
                        <img height={56} src={brandImg} alt="" />
                    </Link>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Form className="d-flex ms-2">
                            <Form.Control
                                type="search"
                                placeholder="Search"
                                className="me-2"
                                aria-label="Search"
                            />
                            <Button variant="outline-dark">Search</Button>
                        </Form>
                        <Nav
                            className="ms-auto my-2 my-lg-0 fw-bold"
                            style={{ maxHeight: '100px' }}
                            navbarScroll
                        >
                            <Nav.Link className=''>Home</Nav.Link>
                            <Nav.Link >News</Nav.Link>
                            <Nav.Link >
                                Destination
                            </Nav.Link>
                            <Nav.Link >
                                Blog
                            </Nav.Link>
                            <Nav.Link >
                                Contact
                            </Nav.Link>
                        </Nav>
                        <Button variant='warning' className='text-white'>Login</Button>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;