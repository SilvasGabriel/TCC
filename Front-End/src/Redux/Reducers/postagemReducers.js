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

    POSTAGEM_CRIAR_REQUEST,
    POSTAGEM_CRIAR_SUCCESS,
    POSTAGEM_CRIAR_FAIL,
    POSTAGEM_CRIAR_RESET,

    POSTAGEM_ATAULIZAR_REQUEST,
    POSTAGEM_ATUALIZAR_SUCCESS,
    POSTAGEM_ATUALIZAR_FAIL,
    POSTAGEM_ATUALIZAR_RESET,

    POSTAGEM_INSCRICAO_REQUEST,
    POSTAGEM_INSCRICAO_SUCCESS,
    POSTAGEM_INSCRICAO_FAIL,
    POSTAGEM_INSCRICAO_RESET,
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

//Reducer para criar uma postagem
export const postagemCriarReducer = (state = {}, action) => {
    
    switch (action.type){

        case POSTAGEM_CRIAR_REQUEST:
            return {loading: true, }

        case POSTAGEM_CRIAR_SUCCESS:
            return {loading: false, success: true, postagem: action.payload}

        case POSTAGEM_CRIAR_FAIL:
            return {loading: false, error: action.payload}

        case POSTAGEM_CRIAR_RESET:
            return {}

        default:
            return state
    }

}

//Reducer para atualizar uma postagem
export const postagemAtualizarReducer = (state =  { postagem: {} }, action) => {
    
    switch (action.type){

        case POSTAGEM_ATAULIZAR_REQUEST:
            return {loading: true, }

        case POSTAGEM_ATUALIZAR_SUCCESS:
            return {loading: false, success: true, postagem: action.payload}

        case POSTAGEM_ATUALIZAR_FAIL:
            return {loading: false, error: action.payload}

        case POSTAGEM_ATUALIZAR_RESET:
            return { postagem: {} }

        default:
            return state
    }

}


//Reducer para fazer uma inscrição
export const postagemInscricaoReducer = (state = { }, action) => {
    
    switch (action.type){

        case POSTAGEM_INSCRICAO_REQUEST:
            return {loading: true, }

        case POSTAGEM_INSCRICAO_SUCCESS:
            return {loading: false, success: true}

        case POSTAGEM_INSCRICAO_FAIL:
            return {loading: false, error: action.payload}

        case POSTAGEM_INSCRICAO_RESET:
            return {}

        default:
            return state
    }

}