import React, { useEffect, useState } from 'react'

//React-Router
import { Link } from 'react-router-dom'

//React-Bootstrap
import { Form, Button } from 'react-bootstrap'

//React-Redux
import { useDispatch, useSelector } from 'react-redux'

//Componentes
import Message from '../Components/Message'
import Loader from '../Components/Loader'

//Importanto o container para o formulário
import FormContainer from '../Components/FormContainer.js'

//Redux Actions
import { acessarPerfil, editarUsuarios } from '../Redux/Actions/usuarioActions'

//Constantes
import { USUARIO_ADMIN_EDITAR_RESET } from '../Redux/Constants/usuariosConstants'

const UsuariosEditarScreen = ({ match, history }) => {

    const usuarioId = match.params.id

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [telefone, setTelefone] = useState('')
    const [faculdade, setFaculdade] = useState('')
    const [matricula, setMatricula] = useState('')
    const [isAdmin, setIsAdmin] = useState(false)


    const dispatch = useDispatch()

    const usuarioDetalhes = useSelector((state) => state.usuarioDetalhes)
    const { usuario, loading, error } = usuarioDetalhes

    const usuarioEditar = useSelector((state) => state.usuarioEditar)
    const { success: successEdit, loading: loadingEdit, error: errorEdit } = usuarioEditar


    useEffect(() => {

        if (successEdit) {

            dispatch({ type: USUARIO_ADMIN_EDITAR_RESET })

            history.push('/admin/usuarios')

        } else {

            if (!usuario.name || usuario._id !== usuarioId) {

                dispatch(acessarPerfil(usuarioId))

            } else {

                setName(usuario.name)
                setEmail(usuario.email)
                setTelefone(usuario.telefone)
                setFaculdade(usuario.faculdade)
                setMatricula(usuario.matricula)
                setIsAdmin(usuario.isAdmin)

            }
        }




    }, [dispatch, usuario, usuarioId, successEdit, history])


    const submitHandler = (e) => {
        e.preventDefault()

        dispatch(editarUsuarios({_id: usuarioId, name, email, telefone, faculdade, matricula, isAdmin}))

    }

    return (
        <>
            <Link to='/admin/usuarios' className='btn btn-light my-4'>
                Voltar
            </Link>


            <FormContainer>
                <h1>Editar usuário</h1>

                {loadingEdit && <Loader/>}
                {errorEdit && <Message variant='danger'>{errorEdit}</Message>}

                {loading ?

                    <Loader />

                    : error ?

                        <Message variant='danger'>{error}</Message> : (

                            <Form onSubmit={submitHandler}>

                                <Form.Group controlId='name' className='my-4'>
                                    <Form.Label>Nome</Form.Label>
                                    <Form.Control type='name'
                                        placeholder='Digite seu nome'
                                        value={name}
                                        onChange={(e) => setName(e.target.value)}></Form.Control>
                                </Form.Group>

                                <Form.Group controlId='email' className='my-4'>
                                    <Form.Label>Email</Form.Label>
                                    <Form.Control type='email'
                                        placeholder='Digite seu email'
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}></Form.Control>
                                </Form.Group>

                                <Form.Group controlId='telefone' className='my-4'>
                                    <Form.Label>Telefone</Form.Label>
                                    <Form.Control type='tel'
                                        placeholder='Digite seu telefone'
                                        pattern='[0-9]{10,11}'
                                        value={telefone}
                                        onChange={(e) => setTelefone(e.target.value)}></Form.Control>
                                </Form.Group>

                                <Form.Group controlId='faculdade' className='my-4'>
                                    <Form.Label>Cursa uma faculdade?</Form.Label>
                                    <Form.Control type='text'
                                        placeholder='Informe o nome da sua faculde, se cursar.'
                                        value={faculdade}
                                        onChange={(e) => setFaculdade(e.target.value)}></Form.Control>
                                </Form.Group>

                                <Form.Group controlId='matricula' className='my-4'>
                                    <Form.Label>Matrícula</Form.Label>
                                    <Form.Control type='tel'
                                        placeholder='Digite o seu número de matrícula'
                                        pattern='[0-9]{7}'
                                        value={matricula}
                                        onChange={(e) => setMatricula(e.target.value)}></Form.Control>
                                </Form.Group>

                                <Form.Group controlId='isAdmin' className='my-4'>
                                    <Form.Check type='checkbox'
                                        label='isAdmin'
                                        checked={isAdmin}
                                        onChange={(e) => setIsAdmin(e.target.checked)}></Form.Check>
                                </Form.Group>

                                <Button type='submit' variant='primary' className='my-4'>Editar</Button>

                            </Form>

                        )}


            </FormContainer>

        </>

    )
}


export default UsuariosEditarScreen
