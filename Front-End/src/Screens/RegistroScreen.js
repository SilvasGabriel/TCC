import React, { useEffect, useState } from 'react'

//React-Router
import { Link } from 'react-router-dom'

//React-Bootstrap
import { Form, Button, Row, Col } from 'react-bootstrap'

//React-Redux
import { useDispatch, useSelector } from 'react-redux'

//Componentes
import Message from '../Components/Message'
import Loader from '../Components/Loader'

//Importanto o container para o formulário
import FormContainer from '../Components/FormContainer.js'

//Redux Actions
import { register } from '../Redux/Actions/usuarioActions'

const RegistroScreen = ({ location, history }) => {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [telefone, setTelefone] = useState('')
    const [faculdade, setFaculdade] = useState('')
    const [matricula, setMatricula] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [message, setMessage] = useState(null)

    const dispatch = useDispatch()

    const usuarioRegister = useSelector((state) => state.usuarioRegister)
    const { loading, error, usuarioInfo } = usuarioRegister

    const redirect = location.search ? location.search.split('=')[1] : '/'

    useEffect(() => {
        if (usuarioInfo) {
            history.push(redirect)
        }
    }, [history, usuarioInfo, redirect])

   
    const submitHandler = (e) => {
        e.preventDefault()
        //Checar a senha
        if(password !== confirmPassword){
            setMessage('As senhas não conferem,confira novamente!')
        }else{
            //DISPATCH REGISTRO
            dispatch(register(name,email,password,telefone,faculdade,matricula,))
        }
        
    }

    return (
        <FormContainer>
            <h1>Registro</h1>

            {message && <Message variant='danger'>{message}</Message>}
            {error && <Message variant='danger'>{error}</Message>}
            {loading && <Loader />}

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

                <Form.Group controlId='password' className='my-4'>
                    <Form.Label>Senha</Form.Label>
                    <Form.Control type='password'
                        placeholder='Digite sua senha'
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}></Form.Control>
                </Form.Group>

                <Form.Group controlId='confirmPassword' className='my-4'>
                    <Form.Label>Confime sua senha</Form.Label>
                    <Form.Control type='password'
                        placeholder='Digite sua senha novamente'
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}></Form.Control>
                </Form.Group>

                    
                <Button type='submit' variant='primary' className='my-4'>Criar Cadastro</Button>

            </Form>

            <Row className='py-3'>
                <Col>
                    Possui uma conta? <Link to={redirect ? `/login?redirect=${redirect}` : '/login'}>Login</Link>
                </Col>
            </Row>

        </FormContainer>
    )
}


export default RegistroScreen
