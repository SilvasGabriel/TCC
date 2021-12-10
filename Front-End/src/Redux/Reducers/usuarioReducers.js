import {
    USUARIO_LOGIN_REQUEST,
    USUARIO_LOGIN_SUCCESS,
    USUARIO_LOGIN_FAIL,
    USUARIO_LOGOUT,

    USUARIO_REGISTER_REQUEST,
    USUARIO_REGISTER_SUCCESS,
    USUARIO_REGISTER_FAIL,

    USUARIO_DETALHES_REQUEST,
    USUARIO_DETALHES_SUCCESS,
    USUARIO_DETALHES_FAIL,
    USUARIO_DETALHES_RESET,

    USUARIO_ATUALIZAR_REQUEST,
    USUARIO_ATUALIZAR_SUCCESS,
    USUARIO_ATUALIZAR_FAIL,
    USUARIO_ATUALIZAR_RESET,
} from '../Constants/usuariosConstants'


//Reducer para o login do usuário
export const usuarioLoginReducer = (state = { }, action) => {
    
    switch (action.type){

        case USUARIO_LOGIN_REQUEST:
            return {loading: true }

        case USUARIO_LOGIN_SUCCESS:
            return {loading: false, usuarioInfo: action.payload}

        case USUARIO_LOGIN_FAIL:
            return {loading: false, error: action.payload}
        
        case USUARIO_LOGOUT:
            return {}

        default:
            return state
    }

}


//Reducer para o registro do usuário
export const usuarioRegisterReducer = (state = {}, action) => {
    
    switch (action.type){

        case USUARIO_REGISTER_REQUEST:
            return {loading: true }

        case USUARIO_REGISTER_SUCCESS:
            return {loading: false, usuarioInfo: action.payload}

        case USUARIO_REGISTER_FAIL:
            return {loading: false, error: action.payload}
        
        default:
            return state
    }

}


//Reducer para a mostra dos detalhes do usuário
export const usuarioDetalhesReducer = (state = { usuario: {} }, action) => {
    
    switch (action.type){

        case USUARIO_DETALHES_REQUEST:
            return {...state ,loading: true }

        case USUARIO_DETALHES_SUCCESS:
            return {loading: false, usuario: action.payload}

        case USUARIO_DETALHES_FAIL:
            return {loading: false, error: action.payload}
        
        case USUARIO_DETALHES_RESET:
            return { usuario: {} } 
        
        default:
            return state
    }

}

//Reducer para atualizar os detalhes do usuário
export const usuarioAtualizarReducer = (state = { }, action) => {
    
    switch (action.type){

        case USUARIO_ATUALIZAR_REQUEST:
            return {loading: true }

        case USUARIO_ATUALIZAR_SUCCESS:
            return {loading: false, success:true, usuarioInfo: action.payload}

        case USUARIO_ATUALIZAR_FAIL:
            return {loading: false, error: action.payload}
        
        case USUARIO_ATUALIZAR_RESET:
            return {} 
        
        default:
            return state
    }

}