import React,{useEffect,useState} from 'react'

//React-Router
import {Link} from 'react-router-dom'

//React-Bootstrap
import {Form, Button, Row, Col} from 'react-bootstrap'

//React-Redux
import {useDispatch,useSelector} from 'react-redux'

//Componentes
import Message from '../Components/Message'
import Loader from '../Components/Loader'

//Importanto o container para o formulário
import FormContainer from '../Components/FormContainer.js'

//Redux Actions
import { login } from '../Redux/Actions/usuarioActions.js'


const LoginScreen = ({ location, history }) => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const dispatch = useDispatch()

    const usuarioLogin = useSelector((state)=> state.usuarioLogin)
    const {loading, error, usuarioInfo} = usuarioLogin

    const redirect = location.search ? location.search.split('=')[1] : '/'

    useEffect(() => {
        if(usuarioInfo){
            history.push(redirect)
        }
    }, [history, usuarioInfo, redirect])

    const submitHandler = (e) => {
        e.preventDefault()

        dispatch(login(email, password))
    }

    return (
        <FormContainer>
            <h1>Entrar</h1>

            {error && <Message variant='danger'>{error}</Message>}
            {loading && <Loader/>}

            <Form onSubmit={submitHandler}>

                <Form.Group controlId='email' className='my-4'>
                    <Form.Label>Email</Form.Label>
                    <Form.Control type='email'
                    placeholder='Digite seu email'
                    value={email}
                    onChange={(e)=> setEmail(e.target.value)}></Form.Control>
                </Form.Group>

                <Form.Group controlId='password' className='my-4'>
                    <Form.Label>Senha</Form.Label>
                    <Form.Control type='password'
                    placeholder='Digite sua senha'
                    value={password}
                    onChange={(e)=> setPassword(e.target.value)}></Form.Control>
                </Form.Group>

                <Button type='submit' variant='primary' className='my-4'>Entrar</Button>

            </Form>

            <Row className='py-3'>
                <Col>
                    Não tem cadastro? <Link to={redirect ? `/register?redirect=${redirect}` : '/register' }>Cadastre-se</Link>
                </Col>
            </Row>

        </FormContainer>
    )
}

export default LoginScreen
