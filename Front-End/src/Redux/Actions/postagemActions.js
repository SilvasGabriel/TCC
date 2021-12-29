//Constantes
import {
    POSTAGEM_LISTA_REQUEST,
    POSTAGEM_LISTA_SUCCESS,
    POSTAGEM_LISTA_FAIL,
    POSTAGEM_DETALHES_REQUEST,
    POSTAGEM_DETALHES_SUCCESS,
    POSTAGEM_DETALHES_FAIL,
    //Administradores
    POSTAGEM_DELETAR_REQUEST,
    POSTAGEM_DELETAR_SUCCESS,
    POSTAGEM_DELETAR_FAIL,
} from '../Constants/postagemConstants'

//Axios
import axios from 'axios'

//Action para listar as postagens
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

//Actions para mostrar os detalhes de cada produto
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

//Action para excluir um produto
export const deletarPostagem = (id) => async (dispatch, getState) => {

    try {
        
        dispatch({
            type: POSTAGEM_DELETAR_REQUEST,
        })

        const {usuarioLogin: {usuarioInfo} } = getState()

        const config = {
            headers: {
                Authorization: `Bearer ${usuarioInfo.token}`,
            }
        }

        await axios.delete(`/api/postagens/${id}`, config)

        dispatch({
            type: POSTAGEM_DELETAR_SUCCESS,
        })

    } catch (error) {
        
        dispatch({
            type: POSTAGEM_DELETAR_FAIL,
            payload: error.response && error.response.data.message ? error.response.data.message 
            : error.message,
        })

    }


}
