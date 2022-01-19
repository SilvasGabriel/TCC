import React,{useEffect} from 'react'

//React-Redux
import {useDispatch, useSelector} from 'react-redux'

//React Router Dom
import {Link} from 'react-router-dom'

//React-Bootstrap
import {Carousel, Image} from 'react-bootstrap'

//Actions
import {listaPostagens} from '../Redux/Actions/postagemActions'

//Componentes
import Loader from './Loader'
import Message from './Message'

const PostCarrossel = () => {

    const dispatch = useDispatch()

    const postagemLista = useSelector( (state) => state.postagemLista)
    const {loading, error, postagens} = postagemLista

    useEffect(() => {
        
        dispatch(listaPostagens())

    }, [dispatch])


    return (
        loading ?
        <Loader/> :
        error ?
        <Message variant='danger'>
            {error}
        </Message> : (

            <Carousel 
            pause='hover' className='bg-dark'>
                {postagens.map(postagem => (
                    <Carousel.Item key={postagem._id}>
                        <Link to={`/postagem/${postagem._id}`}>
                            <Image src={postagem.image} alt={postagem.name} fluid/>
                            <Carousel.Caption className='carousel-caption'>
                                <h2>{postagem.name}</h2>
                            </Carousel.Caption>
                        </Link>
                    </Carousel.Item>
                ))}
            </Carousel>
        
            )
    )
}

export default PostCarrossel
