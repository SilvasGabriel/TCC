import React, { useEffect, useState } from 'react'

//React-Bootstrap
import { Form, Button, Row, Col } from 'react-bootstrap'

//React-Redux
import { useDispatch, useSelector } from 'react-redux'

//Componentes
import Message from '../Components/Message'
import Loader from '../Components/Loader'

//Redux Actions
import { 
    acessarPerfil, 
    atualizarPerfil, 
} from '../Redux/Actions/usuarioActions'

const PerfilScreen = ({ location, history }) => {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [telefone, setTelefone] = useState('')
    const [faculdade, setFaculdade] = useState('')
    const [matricula, setMatricula] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')

    const [message, setMessage] = useState(null)
    const dispatch = useDispatch()

    const usuarioDetalhes = useSelector((state) => state.usuarioDetalhes)
    const { loading, error, usuario } = usuarioDetalhes

    const usuarioLogin = useSelector((state) => state.usuarioLogin)
    const { usuarioInfo } = usuarioLogin

    const usuarioAtualizar = useSelector((state)=>state.usuarioAtualizar)
    const { success } = usuarioAtualizar


    useEffect(() => {
        if (!usuarioInfo) {
            history.push('/login')
        } else {

            if (!usuario || !usuario.name ) {

                dispatch(acessarPerfil('perfil'))

            } else {

                setName(usuario.name)
                setEmail(usuario.email)
                setTelefone(usuario.telefone)
                setFaculdade(usuario.faculdade)
                setMatricula(usuario.matricula)

            }
        }
    }, [history, usuarioInfo, dispatch, usuario])

    const submitHandler = (e) => {
        e.preventDefault()
        //Limpar se não passar dados
        

        //Checar a senha
        if (password !== confirmPassword) {
            setMessage('As senhas não conferem,confira novamente!')
        } else {

            //DISPATCH Atualizar Perfil
            dispatch(atualizarPerfil({ _id: usuario._id, name, email, telefone, faculdade, matricula, password }))

        }

    }

    return (
        <Row className='justify-content-center'>
            <Col md={6}>
                <h2>Perfil de Usuário</h2>

                {message && <Message variant='danger'>{message}</Message>}
                {error && <Message variant='danger'>{error}</Message>}
                {success && <Message variant='success'>Dados atualizados com sucesso.</Message>}
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
                            value={faculdade || " "}
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


                    <Button type='submit' variant='primary' className='my-4'
                    >Atualizar Perfil</Button>

                </Form>

            </Col>
        </Row>
    )
}


export default PerfilScreen
