import React from 'react'

//React-Redux
import { useDispatch, useSelector } from 'react-redux'

//Logo
import logo from '../logo.png'

//React-Bootstrap
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap'

//React-Router-Bootstrap
import { LinkContainer } from 'react-router-bootstrap'

//React-Icons
import { FaSignInAlt } from 'react-icons/fa'

//Redux-Actions
import { logout } from '../Redux/Actions/usuarioActions'


const Header = () => {

    const dispatch = useDispatch()

    const usuarioLogin = useSelector(state => state.usuarioLogin)
    const { usuarioInfo } = usuarioLogin

    const logoutHandler = () => {
        dispatch(logout())
    }

    return (
        <header>
            <Navbar className='bgcolorH' expand="lg" collapseOnSelect>
                <Container>
                    <LinkContainer to='/'>
                        <Navbar.Brand><img
                            src={logo}
                            alt="logo-uemg"
                            width="220"
                            height="45"
                        /></Navbar.Brand>
                    </LinkContainer>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />

                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto">
                            <LinkContainer to='/' style={{ color: "white" }}>
                                <Nav.Link className="navlink">Home</Nav.Link>
                            </LinkContainer>
                            <LinkContainer to='/artigos' style={{ color: "white" }}>
                                <Nav.Link className="navlink">Artigos</Nav.Link>
                            </LinkContainer>
                            <LinkContainer to='/sobre' style={{ color: "white" }}>
                                <Nav.Link className="navlink">Sobre</Nav.Link>
                            </LinkContainer>
                            <LinkContainer to='/criar' style={{ color: "white" }} >
                                <Nav.Link className="navlink">Criar Postagem</Nav.Link>
                            </LinkContainer>
                        </Nav>
                    </Navbar.Collapse>

                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto ">

                            {usuarioInfo ? (

                                <NavDropdown title={usuarioInfo.name} id='username' className='nameNavbar'>

                                    <LinkContainer to="/perfil">
                                        <NavDropdown.Item>
                                            Perfil
                                        </NavDropdown.Item>
                                    </LinkContainer>

                                    <NavDropdown.Item onClick={logoutHandler}>
                                        Sair
                                    </NavDropdown.Item>

                                </NavDropdown>

                            ) : (
                                <>
                                    <LinkContainer to='/register' style={{ color: "white" }} >
                                        <Nav.Link className='navlink'>Registre-se</Nav.Link>
                                    </LinkContainer>

                                    <LinkContainer to='/login' style={{ color: "white" }}>
                                        <Nav.Link className='navlink'><FaSignInAlt /> Login</Nav.Link>
                                    </LinkContainer>
                                </>
                            )}

                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    )
}

export default Header
