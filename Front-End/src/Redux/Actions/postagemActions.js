//Constantes
import {
    POSTAGEM_LISTA_REQUEST,
    POSTAGEM_LISTA_SUCCESS,
    POSTAGEM_LISTA_FAIL,
    POSTAGEM_DETALHES_REQUEST,
    POSTAGEM_DETALHES_SUCCESS,
    POSTAGEM_DETALHES_FAIL,
} from '../Constants/postagemConstants'

//Axios
import axios from 'axios'

export const listaPostagens = () => async(dispatch) => {

    try {

        dispatch({type: POSTAGEM_LISTA_REQUEST})

        const { data } = await axios.get('/api/postagens')

        dispatch({
            type: POSTAGEM_LISTA_SUCCESS,
            payload: data,
        })

    } catch (error) {
        
        dispatch({
            type: POSTAGEM_LISTA_FAIL,
            payload: error.response && error.response.data.message ? error.response.data.message 
            : error.message,
        })

    }

}

export const listaPostagemDetalhes = (id) => async(dispatch) => {

    try {

        dispatch({type: POSTAGEM_DETALHES_REQUEST})

        const { data } = await axios.get(`/api/postagens/${id}`)

        dispatch({
            type: POSTAGEM_DETALHES_SUCCESS,
            payload: data,
        })

    } catch (error) {
        
        dispatch({
            type: POSTAGEM_DETALHES_FAIL,
            payload: error.response && error.response.data.message ? error.response.data.message 
            : error.message,
        })

    }

}