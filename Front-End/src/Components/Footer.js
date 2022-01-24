import React from 'react'

//React-Bootstrap
import { Container, Row, Col, Nav } from 'react-bootstrap'

//React-Router-Bootstrap
import { LinkContainer } from 'react-router-bootstrap'

//React-Icons
import { FaInstagramSquare, FaYoutubeSquare } from 'react-icons/fa'

const Footer = () => {
    return (
        <footer style={{marginTop: "2.438rem"}}>

            <Container className='bgcolorF' fluid>

                <Row>

                    <Col className='col-sm-6'>

                        <h5 className='text-center' style={{ color: "white" }}>Redes Sociais</h5>

                        <LinkContainer to='' className='text-center align-self-center'>
                            <Nav.Link >
                                <FaYoutubeSquare size={40} color="white" />
                            </Nav.Link>
                        </LinkContainer>

                        <LinkContainer to='' className='text-center align-self-center'>
                            <Nav.Link >
                                <FaInstagramSquare size={40} color="white" />
                            </Nav.Link>
                        </LinkContainer>


                    </Col>

                    <Col className='col-sm-6'>

                        <h5 style={{ color: "white" }} >Contato</h5>

                        <h6 style={{ color: "white" }} >Telefone: </h6>

                        <h6 style={{ color: "white" }} >Endereço: R.Ver.Geraldo Moisés da Silva, s/n - Universitário, Ituiutaba - MG, 38302-192</h6>

                        <h6 style={{ color: "white" }} >Email: </h6>

                    </Col>


                    <Col className='text-center py-3 align-self-end' style={{ color: "white" }}>Copyright &copy; Dança-UEMG</Col>


                </Row>

            </Container>

        </footer>
    )
}

export default Footer
