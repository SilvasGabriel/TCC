import React, { useEffect, useState } from 'react'

//React-Router-Dom
import { Link } from 'react-router-dom'

//React-Bootstrap
import { Row, Col, Image, ListGroup, Button, Form } from 'react-bootstrap'

//React Redux
import { useDispatch, useSelector } from 'react-redux'

//Redux Actions
import { listaPostagemDetalhes, criarInscricao } from '../Redux/Actions/postagemActions'

//Constantes
import { POSTAGEM_INSCRICAO_RESET } from '../Redux/Constants/postagemConstants'

//Message e Loader Componentes
import Message from '../Components/Message'
import Loader from '../Components/Loader'

const PostScreen = ({ match }) => {

    const [prenome, setPrenome] = useState('')

    const dispatch = useDispatch()

    const postagemDetalhes = useSelector(state => state.postagemDetalhes)
    const { loading, error, postagem } = postagemDetalhes

    const usuarioLogin = useSelector((state) => state.usuarioLogin)
    const { usuarioInfo } = usuarioLogin

    const postagemInscricao = useSelector((state) => state.postagemInscricao)
    const {
        loading: loadingCriarInscricao,
        error: errorCriarInscricao,
        success: successCriarInscricao,
    } = postagemInscricao

    useEffect(() => {

        if (successCriarInscricao) {
            setPrenome('')
            dispatch({ type: POSTAGEM_INSCRICAO_RESET })
        }

        dispatch(listaPostagemDetalhes(match.params.id))

    }, [dispatch, match, successCriarInscricao])

    const submitHandler = (e) => {
        e.preventDefault()
        dispatch(criarInscricao(match.params.id, { prenome, }))
    }

    return (
        <>
            <Link className='btn btn-dark my-3' to='/artigos'>
                Voltar
            </Link>

            {loading ? (

                <Loader />

            ) : error ? (

                <Message variant='danger'>{error}</Message>

            ) : (
                <>
                    <Row className='justify-content-md-center'>
                        <Col md={6}>
                            <ListGroup.Item className='my-3 text-center'>
                                <h2>{postagem.name}</h2>
                            </ListGroup.Item>
                            <Image src={postagem.image} alt={postagem.name} fluid />
                            <ListGroup.Item className='my-3 text-center'>
                                <h3>{postagem.description}</h3>
                            </ListGroup.Item>
                        </Col>
                    </Row>
                    <Row className='justify-content-md-center'>
                        <Col md={6}>
                            <ListGroup.Item className='my-3 text-center'>
                                <h3>Inscreva-se para a aula!</h3>

                                {successCriarInscricao && (
                                    <Message variant='success'>
                                        Inscrição feita com sucesso!
                                    </Message>
                                )}

                                {loadingCriarInscricao && <Loader/>}

                                {errorCriarInscricao && (
                                    <Message variant='danger'>
                                        {errorCriarInscricao}
                                    </Message>
                                )}

                                {usuarioInfo ? (
                                    <Form onSubmit={submitHandler}>
                                        <Form.Group controlId='prenome'>
                                            <Form.Control type='text'
                                                placeholder='Digite como quer ser chamado aqui!'
                                                value={prenome}
                                                onChange={(e) => setPrenome(e.target.value)}
                                            >
                                            </Form.Control>
                                        </Form.Group>
                                        <Button type='submit' variant='primary' className='my-3'
                                        disabled={loadingCriarInscricao}
                                        >
                                            Inscrever
                                        </Button>
                                    </Form>
                                ) :
                                    <Message className='my-3 text-center'>
                                        Por favor faça o <Link to='/login'>login</Link> para se inscrever para aula! 
                                        {' '}
                                    </Message>
                                }
                            </ListGroup.Item>
                        </Col>
                    </Row>
                </>
            )
            }
        </>
    )
}

export default PostScreen
