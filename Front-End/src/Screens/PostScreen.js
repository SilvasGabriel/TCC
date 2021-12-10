import React, { useEffect } from 'react'

//React-Router-Dom
import { Link } from 'react-router-dom'

//React-Bootstrap
import { Row, Col, Image, ListGroup, Button } from 'react-bootstrap'

//React Redux
import { useDispatch, useSelector } from 'react-redux'

//Redux Actions
import { listaPostagemDetalhes } from '../Redux/Actions/postagemActions'

//Message e Loader Componentes
import Message from '../Components/Message'
import Loader from '../Components/Loader'

const PostScreen = ({ match }) => {

    const dispatch = useDispatch()

    const postagemDetalhes = useSelector(state => state.postagemDetalhes)
    const { loading, error, postagem } = postagemDetalhes

    useEffect(() => {
        dispatch(listaPostagemDetalhes(match.params.id))
    }, [dispatch, match])

    return (
        <>
            <Link className='btn btn-dark my-3' to='/'>
                Voltar
            </Link>

            {loading ? (

                <Loader />

            ) : error ? (

                <Message variant='danger'>{error}</Message>

            ) : (
                
                <Row className='justify-content-md-center'>
                    <Col md={6}>
                        <ListGroup.Item className='my-3 text-center'>
                            <h2>{postagem.name}</h2>
                        </ListGroup.Item>
                        <Image src={postagem.image} alt={postagem.name} fluid />
                        <ListGroup.Item className='my-3 text-center'>
                            <h3>{postagem.description}</h3>
                        </ListGroup.Item>

                        <ListGroup>
                            <Button className='btn btn-datrk my-4 text-center' type='submit'>Inscreva-se</Button>
                        </ListGroup>
                    </Col>
                </Row>
            )
            }
        </>
    )
}

export default PostScreen
