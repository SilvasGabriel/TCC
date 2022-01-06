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
import { listaPostagemDetalhes, atualizarPostagem } from '../Redux/Actions/postagemActions'

//Constantes
import { POSTAGEM_ATUALIZAR_RESET } from '../Redux/Constants/postagemConstants'

const PostagensEditarScreen = ({ match, history }) => {

    const postagemId = match.params.id

    const [name, setName] = useState('')
    const [image, setImage] = useState('')
    const [description, setDescription] = useState('')

    const dispatch = useDispatch()

    const postagemDetalhes = useSelector((state) => state.postagemDetalhes)
    const { loading, error, postagem } = postagemDetalhes

    const postagemAtualizar = useSelector((state) => state.postagemAtualizar)
    const {
        loading: loadingAtualizar,
        error: errorAtualizar,
        success: successAtualizar } = postagemAtualizar

    useEffect(() => {

        if (successAtualizar) {
            dispatch({ type: POSTAGEM_ATUALIZAR_RESET })
            history.push('/admin/postagens')
        }
        else {

            if (!postagem.name || postagem._id !== postagemId) {

                dispatch(listaPostagemDetalhes(postagemId))

            } else {

                setName(postagem.name)
                setImage(postagem.image)
                setDescription(postagem.description)

            }

        }

    }, [dispatch, postagem, postagemId, history, successAtualizar])


    const submitHandler = (e) => {
        e.preventDefault()

        //ATUALIZAR POSTAGENS
        dispatch(atualizarPostagem({
            _id: postagemId,
            name, 
            image,
            description,
        }))
    }


    return (
        <>
            <Link to='/admin/postagens' className='btn btn-light my-4'>
                Voltar
            </Link>


            <FormContainer>
                <h1>Editar Postagem</h1>

                {loadingAtualizar && <Loader/>}
                {errorAtualizar && <Message variant='danger'>{errorAtualizar}</Message>}

                {loading ?

                    <Loader />

                    : error ?

                        <Message variant='danger'>{error}</Message> : (

                            <Form onSubmit={submitHandler}>

                                <Form.Group controlId='name' className='my-4'>
                                    <Form.Label>Título</Form.Label>
                                    <Form.Control type='name'
                                        placeholder='Digite o titulo da postagem'
                                        value={name}
                                        onChange={(e) => setName(e.target.value)}></Form.Control>
                                </Form.Group>

                                <Form.Group controlId='image' className='my-4'>
                                    <Form.Label>Imagem</Form.Label>
                                    <Form.Control type='text'
                                        placeholder='Digite a url/endereço da imagem'
                                        value={image}
                                        onChange={(e) => setImage(e.target.value)}></Form.Control>
                                    
                                </Form.Group>

                                <Form.Group controlId='description' className='my-4'>
                                    <Form.Label>Descrição</Form.Label>
                                    <Form.Control type='text'
                                        placeholder='Digite a descrição da postagem'
                                        value={description}
                                        onChange={(e) => setDescription(e.target.value)}></Form.Control>
                                </Form.Group>

                                <Button type='submit' variant='primary' className='my-4'>Atualizar</Button>

                            </Form>

                        )}

            </FormContainer>

        </>

    )
}


export default PostagensEditarScreen
