import React, {useEffect} from 'react'

//React-Router-Bootstrap
import { LinkContainer } from 'react-router-bootstrap'

//React-Bootstrap
import { Table, Button} from 'react-bootstrap'

//React-Redux
import { useDispatch, useSelector } from 'react-redux'

//Componentes
import Message from '../Components/Message'
import Loader from '../Components/Loader'

//React-Icons
import { FaCheckCircle, FaTimesCircle, FaEdit, FaTrash } from 'react-icons/fa'

//Redux Actions
import { listarUsuários } from '../Redux/Actions/usuarioActions'


const UsuariosScreen = () => {
    
    const dispatch = useDispatch()

    const usuarioListar = useSelector((state)=> state.usuarioListar)
    const {loading, error, usuarios} = usuarioListar

    useEffect(() => {

        dispatch( listarUsuários() )

    }, [dispatch])

    const deletarHandler = (id) =>{
        console.log('deletar')
    }

    return (
        <>
            <h1>Usuários</h1>
            {loading ? 
                <Loader/>
            : error ?
                <Message variant='danger'>{error}</Message>
            : (
                <Table striped bordered hover responsive className='table-sm'>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>NOME</th>
                            <th>EMAIL</th>
                            <th>TELEFONE</th>
                            <th>FACULDADE</th>
                            <th>NÚMERO DE MATRICULA</th>
                            <th>ADMINISTRADOR</th>
                        </tr>
                    </thead>
                    <tbody>
                        { usuarios.map( (usuario) => (
                            
                            <tr key={usuario._id} > 
                            
                                <td>{usuario._id}</td>
                                <td>{usuario.name}</td>
                                <td>{usuario.email}</td>
                                <td>{usuario.telefone}</td>
                                <td>{usuario.faculdade}</td>
                                <td>{usuario.matricula}</td>
                                <td>
                                    {usuario.isAdmin  ? (
                                    
                                        <FaCheckCircle style={{color: 'green'}} /> ) : ( 
                                    
                                        <FaTimesCircle style={{color: 'red'}} />  
                                    )}
                                </td>
                                <td>
                                    <LinkContainer to={`/admin/users/${usuario._id}/editar`}>

                                        <Button variant='dark' className='btn-sm'>

                                            <FaEdit />

                                        </Button>

                                    </LinkContainer>

                                    <Button variant='danger' className='btn-sm' onClick={()=> deletarHandler(usuario._id)}>

                                        <FaTrash/>

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

export default UsuariosScreen
