//Constantes
import {
    POSTAGEM_LISTA_REQUEST,
    POSTAGEM_LISTA_SUCCESS,
    POSTAGEM_LISTA_FAIL,
    POSTAGEM_DETALHES_REQUEST,
    POSTAGEM_DETALHES_SUCCESS,
    POSTAGEM_DETALHES_FAIL,
} from '../Constants/postagemConstants'

export const postagemListaReducer = (state = { postagens: [] }, action) => {
    
    switch (action.type){

        case POSTAGEM_LISTA_REQUEST:
            return {loading: true, postagens: []}

        case POSTAGEM_LISTA_SUCCESS:
            return {loading: false, postagens: action.payload}

        case POSTAGEM_LISTA_FAIL:
            return {loading: false, error: action.payload}

        default:
            return state
    }

}

export const postagemDetalhesReducer = (state = { postagem: { register: [] } }, action) => {
    
    switch (action.type){

        case POSTAGEM_DETALHES_REQUEST:
            return {...state, loading: true, }

        case POSTAGEM_DETALHES_SUCCESS:
            return {loading: false, postagem: action.payload}

        case POSTAGEM_DETALHES_FAIL:
            return {loading: false, error: action.payload}

        default:
            return state
    }

}