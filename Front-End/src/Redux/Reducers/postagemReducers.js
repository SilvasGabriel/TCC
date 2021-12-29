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


//Reducer para listar as postagens
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


//Reducer para mostrar os detalhes da postagem
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


//Reducer para excluir uma postagem
export const postagemDeletarReducer = (state = {}, action) => {
    
    switch (action.type){

        case POSTAGEM_DELETAR_REQUEST:
            return {loading: true, }

        case POSTAGEM_DELETAR_SUCCESS:
            return {loading: false, success: true}

        case POSTAGEM_DELETAR_FAIL:
            return {loading: false, error: action.payload}

        default:
            return state
    }

}