import React from 'react'
import { Link } from 'react-router-dom'
import {Nav, Navbar}  from 'react-bootstrap'
import logo from '../logo.png'

export default function Header () {

    return(
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        
        <Navbar.Brand >
            <Link to="/">
                <img src={logo} alt="logo-uemg" width="220" height="45"/>
            </Link>
        </Navbar.Brand>
        
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        
        <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto">
                
                <Nav.Link >
                    <Link to="/">
                        Home
                    </Link>
                </Nav.Link>
                
                <Nav.Link  >
                    Criar Post
                </Nav.Link>

                <Nav.Link >
                    Postagens
                </Nav.Link>
                
                <Nav.Link >
                    <Link to="/about">
                        About
                    </Link>
                </Nav.Link>

             
            </Nav>

            <Nav>
                
                <Nav.Link>
                    Login
                </Nav.Link>

                <Nav.Link>
                    Registre-se
                </Nav.Link>

            </Nav>
        </Navbar.Collapse>
        </Navbar>
    )

}