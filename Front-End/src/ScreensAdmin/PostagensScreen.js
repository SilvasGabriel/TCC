import React, { useEffect } from 'react'

//React-Router-Bootstrap
import { LinkContainer } from 'react-router-bootstrap'

//React-Bootstrap
import { Table, Button, Row, Col } from 'react-bootstrap'

//React-Redux
import { useDispatch, useSelector } from 'react-redux'

//Componentes
import Message from '../Components/Message'
import Loader from '../Components/Loader'

//React-Icons
import { FaEdit, FaTrash } from 'react-icons/fa'

//Redux Actions
import { listaPostagens, deletarPostagem } from '../Redux/Actions/postagemActions'


const PostagensScreen = ({ history, match }) => {

    const dispatch = useDispatch()

    const postagemLista = useSelector((state) => state.postagemLista)
    const { loading, error, postagens } = postagemLista

    const postagemDeletar= useSelector((state) => state.postagemDeletar)
    const {
        loading: LoadingDeletar, 
        error: errorDeletar,
        success: successDeletar } = postagemDeletar

    const usuarioLogin = useSelector((state) => state.usuarioLogin)
    const { usuarioInfo } = usuarioLogin


    const deletarHandler = (id) => {
        //DELETAR POSTAGEM
        if (window.confirm('Você tem certeza que deseja excluir esta postagem?')) {

            dispatch( deletarPostagem(id) )

        }

    }

    const criarPostagemHandler = (postagem) => {
        //CRIAR POSTAGEM
    }

    useEffect(() => {

        if (usuarioInfo && usuarioInfo.isAdmin) {

            dispatch(listaPostagens())

        } else {

            history.push('/login')

        }


    }, [dispatch, history, usuarioInfo, successDeletar])


    return (
        <>
            <Row className='align-items-center'>
                <Col>
                    <h1>Postagens</h1>
                </Col>
                <Col className='text-end'>
                    <Button className='my-3' onClick={criarPostagemHandler}>
                        Criar Postagem
                    </Button>
                </Col>
            </Row>

            {LoadingDeletar && <Loader/>}
            {errorDeletar && <Message variant='danger'>{errorDeletar}</Message>}

            {loading ?
                <Loader />
                : error ?
                    <Message variant='danger'>{error}</Message>
                    : (
                        <Table striped bordered hover responsive className='table-sm'>
                            <thead>
                                <tr>
                                    <th>ID</th>
                                    <th>NOME</th>
                                    <th>IMAGE</th>
                                    <th>DESCRIPTION</th>
                                    <th>ADMINISTRADOR</th>
                                </tr>
                            </thead>
                            <tbody>
                                {postagens.map((postagem) => (

                                    <tr key={postagem._id} >

                                        <td>{postagem._id}</td>
                                        <td>{postagem.name}</td>
                                        <td>{postagem.image}</td>
                                        <td>{postagem.description}</td>

                                        <td>

                                            <LinkContainer to={`/admin/postagem/${postagem._id}`}>

                                                <Button variant='dark' className='btn-sm'>

                                                    <FaEdit />

                                                </Button>

                                            </LinkContainer>

                                            <Button variant='danger' className='btn-sm' onClick={() => deletarHandler(postagem._id)}>

                                                <FaTrash />

                                            </Button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </Table>
                    )
            }
        </>
    )
}

export default PostagensScreen
