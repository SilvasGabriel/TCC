import {
    //usuários
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

    //usuários administradores
    USUARIO_ADMIN_LISTAR_REQUEST,
    USUARIO_ADMIN_LISTAR_SUCCESS,
    USUARIO_ADMIN_LISTAR_FAIL,
} from '../Constants/usuariosConstants'

import axios from 'axios'


//Action para entran no sistema
export const login = (email, password) => async(dispatch) => {

    try {
        
        dispatch ({
            type: USUARIO_LOGIN_REQUEST,
        })

        const config = {
            headers: {
                'Content-Type': 'application/json',
            }
        }

        const { data } = await axios.post('/api/users/login', { email, password}, config)

        dispatch({
            type: USUARIO_LOGIN_SUCCESS,
            payload: data,
        })

        localStorage.setItem('usuarioInfo', JSON.stringify(data))

    } catch (error) {
        
        dispatch({
            type: USUARIO_LOGIN_FAIL,
            payload: error.response && error.response.data.message ? error.response.data.message 
            : error.message,
        })

    }
}

//Action para sair do sistema
export const logout = () => (dispatch) => {

    localStorage.removeItem('usuarioInfo')
    
    dispatch({type: USUARIO_ATUALIZAR_RESET})
    dispatch({type: USUARIO_DETALHES_RESET})
    dispatch({type: USUARIO_LOGOUT})
}

//Action para registrar um novo usuário no sistema
export const register = (name,email,password,telefone,faculdade,matricula) => async(dispatch) => {

    try {
        
        dispatch ({
            type: USUARIO_REGISTER_REQUEST,
        })

        const config = {
            headers: {
                'Content-Type': 'application/json',
            }
        }

        const { data } = await axios.post('/api/users', {name,email,password,telefone,faculdade,matricula}, config)

        dispatch({
            type: USUARIO_REGISTER_SUCCESS,
            payload: data,
        })

        dispatch({
            type: USUARIO_LOGIN_SUCCESS,
            payload: data,
        })

        localStorage.setItem('usuarioInfo', JSON.stringify(data))

    } catch (error) {
        
        dispatch({
            type: USUARIO_REGISTER_FAIL,
            payload: error.response && error.response.data.message ? error.response.data.message 
            : error.message,
        })

    }
}

//Action para acessar o perfil do usuário
export const acessarPerfil = (id) => async(dispatch, getState) => {

    try {
        
        dispatch ({
            type: USUARIO_DETALHES_REQUEST,
        })

        const { usuarioLogin: { usuarioInfo } } = getState()

        const config = {
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${usuarioInfo.token}`
            }
        }

        const { data } = await axios.get(`/api/users/${id}`,config)

        dispatch({
            type: USUARIO_DETALHES_SUCCESS,
            payload: data,
        })

    } catch (error) {
        
        dispatch({
            type: USUARIO_DETALHES_FAIL,
            payload: error.response && error.response.data.message ? error.response.data.message 
            : error.message,
        })

    }
}


//Action para atualizar os dados do perfil
export const atualizarPerfil = (usuario) => async(dispatch, getState) => {

    try {
        
        dispatch ({
            type: USUARIO_ATUALIZAR_REQUEST,
        })

        const { usuarioLogin: { usuarioInfo } } = getState()

        const config = {
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${usuarioInfo.token}`
            }
        }

        const { data } = await axios.put(`/api/users/perfil`, usuario, config)

        dispatch({
            type: USUARIO_ATUALIZAR_SUCCESS,
            payload: data,
        })

        dispatch({
            type: USUARIO_LOGIN_SUCCESS,
            payload: data,
        })

        localStorage.setItem('usuarioInfo', JSON.stringify(data))

    } catch (error) {
        
        dispatch({
            type: USUARIO_ATUALIZAR_FAIL,
            payload: error.response && error.response.data.message ? error.response.data.message 
            : error.message,
        })

    }
}

//Action para o administrador listar os usuários
export const listarUsuários = () => async(dispatch, getState) => {

    try {
        
        dispatch ({
            type: USUARIO_ADMIN_LISTAR_REQUEST,
        })

        const { usuarioLogin: { usuarioInfo } } = getState()

        const config = {
            headers: {
                Authorization: `Bearer ${usuarioInfo.token}`
            }
        }

        const { data } = await axios.get('/api/users', config)

        dispatch({
            type: USUARIO_ADMIN_LISTAR_SUCCESS,
            payload: data,
        })

    } catch (error) {
        
        dispatch({
            type: USUARIO_ADMIN_LISTAR_FAIL,
            payload: error.response && error.response.data.message ? error.response.data.message 
            : error.message,
        })

    }
}
